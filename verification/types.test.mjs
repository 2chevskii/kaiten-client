import assert from "node:assert/strict";
import { resolve } from "node:path";
import { test } from "node:test";
import ts from "typescript";

const source = `
import { KaitenClient, type OperationOptions, type CustomPropertyValues, type DocumentData } from "../src/index.js";
import { KaitenScimClient } from "../src/scim.js";
import type { AddonCapabilities, AddonDialogOptions, AddonContext } from "../src/addons.js";
import type { CardUpdateWebhookEvent, TimelogUpdateWebhookEvent } from "../src/webhooks.js";

declare const client: KaitenClient;
declare const scim: KaitenScimClient;
declare const options: OperationOptions;
await client.cards.retrieveCard(1, undefined, { signal: options.signal });
const card = await client.cards.retrieveCard(1);
card.board.title.toUpperCase();
card.members.map(member => member.id);
card.properties?.id_42;

const fields: CustomPropertyValues = { id_42: [1, "value"], id_999: null };
await client.cardBlockers.blockCard(1, { reason: "Blocked" });
await client.columns.updateColumn(1, 2, { title: "Column" });
// @ts-expect-error A blocker must supply a documented reason or blocking card.
await client.cardBlockers.blockCard(1, {});
// @ts-expect-error Arbitrary primitive bodies are rejected.
await client.columns.updateColumn(1, 2, "garbage");
// @ts-expect-error Object-wrapped path parameters are no longer accepted.
await client.cards.retrieveCard({ card_id: 1 });

await scim.users.updateUser(1, [{ op: "replace", path: "active", value: false }]);
await scim.groups.updateGroup(1, [{ op: "add", path: "members", value: 2 }]);
// @ts-expect-error SCIM operations are arrays with a constrained op/path/value contract.
await scim.users.updateUser(1, true);
// @ts-expect-error The active path takes a boolean.
await scim.users.updateUser(1, [{ op: "replace", path: "active", value: "false" }]);

const defaultPage = await client.cards.retrieveCardList();
defaultPage.map(item => item.id);
const cursorPage = await client.cards.retrieveCardList({ version: 2 });
cursorPage.result.map(item => item.id);
const optionalVersion: { version?: 2 } = {};
const maybePage = await client.cards.retrieveCardList(optionalVersion);
// @ts-expect-error An optional version can still produce an array.
maybePage.result;
if (Array.isArray(maybePage)) maybePage.map(item => item.id);
else maybePage.result.map(item => item.id);
const maybeDocuments = await client.documents.retrieveListOfDocuments(optionalVersion);
// @ts-expect-error Document search uses the same optional-version rule.
maybeDocuments.result;

const file = await client.restrictedAccessCardFiles.getCardFile("card", "file");
file.url.toUpperCase();
const redirect = await client.restrictedAccessCardFiles.getCardFile("card", "file", true);
redirect.location.toUpperCase();
declare const optionalRedirect: boolean | undefined;
const maybeFile = await client.restrictedAccessCardFiles.getCardFile("card", "file", optionalRedirect);
// @ts-expect-error An optional redirect can still produce file metadata.
maybeFile.location;

const jsonSchema = await client.documentSchemas.getDocumentDataSchema("latest");
jsonSchema.$schema;
const prosemirror = await client.documentSchemas.getDocumentDataSchema("latest", "prosemirror");
prosemirror.nodes;
// @ts-expect-error The schema format is constrained to the documented values.
await client.documentSchemas.getDocumentDataSchema("latest", "yaml");
const document: DocumentData = { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text: "Hello" }] }] };
await client.documents.updateDocument("document", { data: document });
// @ts-expect-error Timesheets require the date range.
await client.timesheet.getList();
// @ts-expect-error The checklist filter is required.
await client.checklists.retrieveCardsWithChecklist(1);

declare const event: CardUpdateWebhookEvent;
event.data.changes.title?.toUpperCase();
event.data.changes.properties?.id_999;
declare const timeLog: TimelogUpdateWebhookEvent;
timeLog.data.changes.time_spent?.toFixed();
const capabilities: AddonCapabilities = { card_facade_badges: () => null };
const dialog: AddonDialogOptions = { url: "./dialog.html", additionalActions: [{ title: "Action", callback: () => {} }] };
window.Addon.initialize(capabilities);
window.Addon.iframe().openDialog(dialog);
declare const addon: AddonContext;
(await addon.getCurrentUser()).uid.toUpperCase();
// @ts-expect-error Related entities are loaded through getCardProperties.
(await addon.getCard()).members;
`;

test("public types accept supported calls and reject the reviewed regressions", () => {
  const file = resolve("verification/type-contracts.mts");
  const options = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    strict: true,
    exactOptionalPropertyTypes: true,
    noUncheckedIndexedAccess: true,
    skipLibCheck: false,
    noEmit: true,
  };
  const host = ts.createCompilerHost(options);
  const originalGetSourceFile = host.getSourceFile.bind(host);
  const originalFileExists = host.fileExists.bind(host);
  host.getSourceFile = (name, ...args) =>
    resolve(name) === file
      ? ts.createSourceFile(file, source, options.target, true)
      : originalGetSourceFile(name, ...args);
  host.fileExists = (name) =>
    resolve(name) === file || originalFileExists(name);
  const program = ts.createProgram([file], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  assert.deepEqual(
    diagnostics.map((diagnostic) =>
      ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
    ),
    [],
  );
});
