import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { format } from "prettier";
import { readConstant, readPublicApi } from "./api-source.mjs";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const registry = JSON.parse(
  await readFile(resolve(root, "docs/api-coverage.json"), "utf8"),
);
const check = process.argv.includes("--check");
const api = readPublicApi();
const labels = {
  ru: {
    rest: "REST API: все операции",
    scim: "SCIM: все операции",
    source: "Документация Kaiten",
    path: "Параметры пути",
    query: "Параметры запроса",
    body: "Тело запроса",
    response: "Ответ",
    required: "Обязательно",
    optional: "Необязательно",
    name: "Поле",
    type: "Тип",
    need: "Обязательность",
    none: "нет",
    fields: "Поля",
    array: "Массив",
    object: "Объект",
    void: "Без тела",
    beta: "Beta",
    deprecated: "Устаревшая операция",
    searchVersion:
      "При `query.version: 2` возвращается `SearchResponseV2<...>` с полями `result` и `position`; без этого параметра возвращается массив.",
    intro:
      "Операции сгруппированы по ресурсам клиента. Имена методов и типов совпадают с экспортами пакета. Для вложенных полей и точных TypeScript-типов используйте подсказки редактора. Ссылки ведут на первичную документацию Kaiten. Справочник создаётся из `docs/api-coverage.json` командой `npm run docs:generate`.",
    version:
      'Маршруты здесь приведены в версии, указанной в документации Kaiten. REST-клиент использует `/api/v1` по умолчанию; `apiVersion: "latest"` переключает префикс на `/api/latest`.',
  },
  en: {
    rest: "REST API: all operations",
    scim: "SCIM: all operations",
    source: "Kaiten documentation",
    path: "Path parameters",
    query: "Query parameters",
    body: "Request body",
    response: "Response",
    required: "Required",
    optional: "Optional",
    name: "Field",
    type: "Type",
    need: "Presence",
    none: "none",
    fields: "Fields",
    array: "Array",
    object: "Object",
    void: "No body",
    beta: "Beta",
    deprecated: "Deprecated operation",
    searchVersion:
      "With `query.version: 2`, the result is `SearchResponseV2<...>` containing `result` and `position`; otherwise the result is an array.",
    intro:
      "Operations are grouped by client resource. Method and type names match the package exports. Use your editor for nested fields and exact TypeScript types. Each entry links to the original Kaiten documentation. This reference is generated from `docs/api-coverage.json` with `npm run docs:generate`.",
    version:
      'Paths below use the version shown in Kaiten\'s documentation. The REST client defaults to `/api/v1`; `apiVersion: "latest"` switches the prefix to `/api/latest`.',
  },
};

function cell(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

function fieldTable(parameters, label) {
  if (!parameters?.length) return `**${label.none}.**\n\n`;
  const rows = parameters.map((field) => {
    const name = typeof field === "string" ? field : field.name;
    const type = typeof field === "string" ? "—" : (field.type ?? "unknown");
    const presence =
      typeof field === "string"
        ? "—"
        : field.required
          ? label.required
          : label.optional;
    return `| \`${cell(name)}\` | ${cell(type)} | ${presence} |`;
  });
  return `| ${label.name} | ${label.type} | ${label.need} |\n| --- | --- | --- |\n${rows.join("\n")}\n\n`;
}

function bodyFields(body) {
  if (!body) return [];
  if (body.fields) return body.fields;
  const schema = body.schema;
  if (!schema?.properties) return [];
  return Object.entries(schema.properties).map(([name, definition]) => ({
    name,
    type: schemaType(definition),
    required: schema.required?.includes(name) ?? false,
  }));
}

function schemaType(definition) {
  if (definition.enum) return definition.enum.map(String).join(" | ");
  if (definition.oneOf) return definition.oneOf.map(schemaType).join(" | ");
  if (definition.anyOf) return definition.anyOf.map(schemaType).join(" | ");
  if (Array.isArray(definition.type)) return definition.type.join(" | ");
  if (definition.type === "array")
    return `array of ${schemaType(definition.items ?? {})}`;
  return definition.type ?? "unknown";
}

function responseSummary(response, label) {
  if (response.kind === "void") return label.void;
  const shape = response.kind === "array" ? label.array : label.object;
  const fields = response.fields ?? response.item_fields ?? [];
  if (fields.length === 0) return shape;
  return `${shape}. ${label.fields}: ${fields.map((field) => `\`${cell(field)}\``).join(", ")}.`;
}

function render(section, language) {
  const label = labels[language];
  const entries = registry.entries.filter((entry) => entry.section === section);
  const groups = new Map();
  for (const entry of entries) {
    const resource = entry.implementation.split(".")[1];
    if (!groups.has(resource)) groups.set(resource, []);
    groups.get(resource).push(entry);
  }
  let content = `<!-- Generated by scripts/generate-api-docs.mjs. Edit docs/api-coverage.json or the generator. -->\n\n# ${label[section]}\n\n${label.intro}\n\n`;
  if (section === "rest") content += `${label.version}\n\n`;
  content += `${[...groups.keys()].map((name) => `[\`${name}\`](#${name.toLowerCase()})`).join(" · ")}\n\n`;

  for (const [resource, operations] of groups) {
    content += `## ${resource}\n\n`;
    for (const entry of operations) {
      const [, , method] = entry.implementation.split(".");
      const typePrefix =
        resource[0].toUpperCase() +
        resource.slice(1) +
        method[0].toUpperCase() +
        method.slice(1);
      content += `### ${method}\n\n`;
      content += `**\`${entry.implementation.replace(/^Kaiten(?:Scim)?Client\./, "client.")}\`** · \`${entry.method} ${entry.endpoint}\`\n\n`;
      content += `${entry.title}. [${label.source}](${entry.documentation}).`;
      if (entry.beta) content += ` **${label.beta}.**`;
      if (entry.deprecated) content += ` **${label.deprecated}.**`;
      content += "\n\n";
      const operation = api.operations.get(entry.implementation);
      if (!operation)
        throw new Error(`Missing public operation: ${entry.implementation}`);
      content += `\`...args: ${typePrefix}Params\`\n\n`;
      content += `\`\`\`ts\ndeclare const ${method}: ${operation.signatures.length === 1 ? operation.signatures[0] : `{ ${operation.signatures.map((signature) => signature.replace(" => ", ": ") + ";").join(" ")} }`};\n\`\`\`\n\n`;
      if (
        entry.query_parameters?.some(
          (parameter) => parameter.name === "version",
        )
      ) {
        content += `${label.searchVersion}\n\n`;
      }
      const pathParameters =
        entry.path_parameters ??
        [...entry.endpoint.matchAll(/\{([^}]+)\}/g)].map((match, index) => ({
          name: match[1],
          type: operation.parameters[index]?.typeText ?? "string",
          required: true,
        }));
      content += `**${label.path}**\n\n${fieldTable(pathParameters, label)}`;
      content += `**${label.query}**\n\n${fieldTable(entry.query_parameters, label)}`;
      if (entry.request_body) {
        content += `**${label.body}**\n\n${fieldTable(bodyFields(entry.request_body), label)}`;
      }
      content += `**${label.response}:** ${responseSummary(entry.response, label)}\n\n`;
    }
  }
  return content;
}

async function metadataItems(source, constant, field) {
  return readConstant(source, constant).map((entry) => {
    const documentation = entry.documentation;
    const name = entry[field];
    const type = entry.type;
    if (!documentation || !name || !type) {
      throw new Error(`Incomplete entry in ${constant}`);
    }
    return { documentation, name, type };
  });
}

async function renderIntegrations(language) {
  const webhookEvents = await metadataItems(
    "src/webhooks/events.ts",
    "WEBHOOK_EVENT_METADATA",
    "event",
  );
  const importEntities = await metadataItems(
    "src/imports.ts",
    "IMPORT_ENTITY_METADATA",
    "entity",
  );
  if (webhookEvents.length !== 22 || importEntities.length !== 15) {
    throw new Error(
      "Integration metadata differs from the documented inventory",
    );
  }
  const russian = language === "ru";
  let content = `<!-- Generated by scripts/generate-api-docs.mjs. Edit the source metadata or the generator. -->\n\n# ${russian ? "Контракты интеграций" : "Integration contracts"}\n\n`;
  content += russian
    ? "Здесь перечислены экспорты за пределами REST и SCIM. Полные структуры доступны в TypeScript-объявлениях пакета.\n\n"
    : "These exports cover integrations beyond REST and SCIM. Full structures are available in the package's TypeScript declarations.\n\n";
  content += `## ${russian ? "Исходящие вебхуки" : "Outgoing webhooks"}\n\n`;
  content += `\`@2chevskii/kaiten-client/webhooks\` · \`KaitenWebhookEvent\` · \`WEBHOOK_EVENT_METADATA\`\n\n`;
  content += `| ${russian ? "Событие" : "Event"} | ${russian ? "Тип" : "Type"} | ${russian ? "Документация" : "Documentation"} |\n| --- | --- | --- |\n`;
  for (const event of webhookEvents) {
    content += `| \`${event.name}\` | \`${event.type}\` | [Kaiten](https://developers.kaiten.ru${event.documentation}) |\n`;
  }
  content += `\n## ${russian ? "Файлы импорта" : "Import files"}\n\n`;
  content += `\`@2chevskii/kaiten-client/imports\` · \`IMPORT_ENTITY_METADATA\` · \`ImportEntityName\` · \`ImportColor\`\n\n`;
  content += `| ${russian ? "Файл" : "File"} | ${russian ? "Тип записи" : "Record type"} | ${russian ? "Документация" : "Documentation"} |\n| --- | --- | --- |\n`;
  for (const entity of importEntities) {
    content += `| \`${entity.name}\` | \`${entity.type}\` | [Kaiten](https://developers.kaiten.ru${entity.documentation}) |\n`;
  }
  content += russian
    ? "\n## Метаданные пользователя\n\n`@2chevskii/kaiten-client/metadata` экспортирует `UserMetadataRequest`, `UserMetadataResponse`, `UserMetadataPropertyValue` и `UserMetadataHandler`. См. [руководство](/guide/metadata).\n\n## Аддоны\n\n`@2chevskii/kaiten-client/addons` экспортирует объявления браузерного SDK: `KaitenAddonSdk`, `AddonCapabilities`, `AddonContext`, `AddonPlatformApiClient`, `AddonPopupOptions`, `AddonDialogOptions` и связанные типы. `@2chevskii/kaiten-client/addon-oauth` экспортирует `AddonOAuthClient`, `AddonOAuthOptions`, `AddonTokenKey` и `AddonTokenResponse`; методы `getToken` и `refreshToken` описаны в [руководстве](/guide/addons).\n"
    : "\n## User metadata\n\n`@2chevskii/kaiten-client/metadata` exports `UserMetadataRequest`, `UserMetadataResponse`, `UserMetadataPropertyValue`, and `UserMetadataHandler`. See the [guide](/en/guide/metadata).\n\n## Addons\n\n`@2chevskii/kaiten-client/addons` exports browser SDK declarations: `KaitenAddonSdk`, `AddonCapabilities`, `AddonContext`, `AddonPlatformApiClient`, `AddonPopupOptions`, `AddonDialogOptions`, and related types. `@2chevskii/kaiten-client/addon-oauth` exports `AddonOAuthClient`, `AddonOAuthOptions`, `AddonTokenKey`, and `AddonTokenResponse`; the `getToken` and `refreshToken` methods are covered in the [guide](/en/guide/addons).\n";
  return content;
}

for (const language of ["ru", "en"]) {
  for (const section of ["rest", "scim", "integrations"]) {
    const path = resolve(
      root,
      "docs",
      language === "ru" ? "" : "en",
      "reference",
      `${section}.md`,
    );
    const markdown =
      section === "integrations"
        ? await renderIntegrations(language)
        : render(section, language);
    const output = await format(markdown, { filepath: path });
    if (check) {
      const current = await readFile(path, "utf8");
      if (current !== output)
        throw new Error(`Outdated generated documentation: ${path}`);
    } else {
      await writeFile(path, output);
    }
  }
}
