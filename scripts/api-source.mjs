import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export function readConstant(relativePath, name) {
  const path = resolve(root, relativePath);
  const source = ts.createSourceFile(
    path,
    readFileSync(path, "utf8"),
    ts.ScriptTarget.Latest,
    true,
  );
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const declaration = statement.declarationList.declarations.find(
      (item) => item.name.getText(source) === name,
    );
    if (declaration) return literalValue(declaration.initializer, source);
  }
  throw new Error(`Could not find ${name} in ${relativePath}`);
}

function literalValue(node, source) {
  if (ts.isAsExpression(node) || ts.isParenthesizedExpression(node))
    return literalValue(node.expression, source);
  if (ts.isStringLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isArrayLiteralExpression(node))
    return node.elements.map((item) => literalValue(item, source));
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(
      node.properties.map((property) => {
        if (!ts.isPropertyAssignment(property))
          throw new Error("Metadata must contain literal properties");
        const name = ts.isIdentifier(property.name)
          ? property.name.text
          : literalValue(property.name, source);
        return [name, literalValue(property.initializer, source)];
      }),
    );
  }
  throw new Error(`Metadata must contain literals: ${node.getText(source)}`);
}

export function readPublicApi() {
  const configPath = resolve(root, "tsconfig.json");
  const config = ts.readConfigFile(configPath, ts.sys.readFile);
  if (config.error)
    throw new Error(
      ts.flattenDiagnosticMessageText(config.error.messageText, "\n"),
    );
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
  const program = ts.createProgram(parsed.fileNames, {
    ...parsed.options,
    noEmit: true,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length) {
    throw new Error(
      ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCanonicalFileName: (name) => name,
        getCurrentDirectory: () => root,
        getNewLine: () => "\n",
      }),
    );
  }
  const checker = program.getTypeChecker();
  const operations = new Map();

  for (const [className, relative] of [
    ["KaitenClient", "src/client.ts"],
    ["KaitenScimClient", "src/scim.ts"],
  ]) {
    const source = program.getSourceFile(resolve(root, relative));
    const declaration = source.statements.find(
      (node) => ts.isClassDeclaration(node) && node.name.text === className,
    );
    const instance = checker.getDeclaredTypeOfSymbol(
      checker.getSymbolAtLocation(declaration.name),
    );
    for (const resource of instance.getProperties()) {
      const resourceType = checker.getTypeOfSymbolAtLocation(
        resource,
        declaration,
      );
      for (const operation of resourceType.getProperties()) {
        const methodType = checker.getTypeOfSymbolAtLocation(
          operation,
          declaration,
        );
        const signatures = checker.getSignaturesOfType(
          methodType,
          ts.SignatureKind.Call,
        );
        if (!signatures.length) continue;
        const signature = signatures.at(-1);
        const key = `${className}.${resource.name}.${operation.name}`;
        operations.set(key, {
          key,
          resource: resource.name,
          operation: operation.name,
          signatures: signatures.map((item) =>
            checker
              .signatureToString(
                item,
                declaration,
                ts.TypeFormatFlags.NoTruncation |
                  ts.TypeFormatFlags.WriteArrowStyleSignature,
              )
              .replace(/import\("[^"]+"\)\./g, ""),
          ),
          parameters: signature.parameters.map((parameter) => ({
            name: parameter.name,
            type: checker.getTypeOfSymbolAtLocation(
              parameter,
              parameter.valueDeclaration,
            ),
            typeText: checker.typeToString(
              checker.getTypeOfSymbolAtLocation(
                parameter,
                parameter.valueDeclaration,
              ),
              parameter.valueDeclaration,
              ts.TypeFormatFlags.NoTruncation,
            ),
            optional: Boolean(
              parameter.valueDeclaration.questionToken ||
              parameter.valueDeclaration.initializer,
            ),
          })),
          declaration: signature.declaration,
        });
      }
    }
  }
  return { program, checker, operations };
}

export function querySample(parameters = []) {
  return Object.fromEntries(
    parameters.map((parameter) => [
      parameter.name,
      parameter.type.includes("object")
        ? {}
        : parameter.type.includes("array")
          ? []
          : parameter.type.includes("boolean")
            ? true
            : /number|integer/.test(parameter.type)
              ? 17
              : "sample",
    ]),
  );
}

export function schemaSample(schema) {
  if (!schema) return {};
  if (schema.enum) return schema.enum[0];
  if ("const" in schema) return schema.const;
  if (schema.oneOf)
    return schemaSample(
      schema.oneOf.find((item) => item.type !== "null") ?? schema.oneOf[0],
    );
  if (Array.isArray(schema.type))
    return schemaSample({
      ...schema,
      type: schema.type.find((type) => type !== "null"),
    });
  if (schema.type === "string") return "sample";
  if (schema.type === "number" || schema.type === "integer") return 17;
  if (schema.type === "boolean") return true;
  if (schema.type === "array") return [schemaSample(schema.items)];
  if (schema.type === "null") return null;
  if (schema.properties)
    return Object.fromEntries(
      Object.entries(schema.properties).map(([name, property]) => [
        name,
        schemaSample(property),
      ]),
    );
  return {};
}
