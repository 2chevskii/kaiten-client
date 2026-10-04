import packageJson from '../package.json' with {type: 'json'};
import {writeFileSync, appendFileSync} from 'node:fs';

const baseVersion = packageJson.version;
const {PR_NUMBER, COMMIT_SHA, GITHUB_OUTPUT} = process.env;

const packageVersion = `${baseVersion}-${PR_NUMBER}-${COMMIT_SHA.substring(0, 8)}`;

const packageJsonContent = {
  ...packageJson,
  version: packageVersion,
};

console.log('PackageJsonContent:', packageJsonContent);

writeFileSync('../package.json', JSON.stringify(packageJsonContent, null, 2), {
  encoding: 'utf-8',
});

const sanitizedName = packageJsonContent.name
  .replace('@', '')
  .replace('/', '-');

console.log('SanitizedName:', sanitizedName);

appendFileSync(GITHUB_OUTPUT, `package_version=${packageVersion}\n`, {
  encoding: 'utf-8',
});
appendFileSync(
  GITHUB_OUTPUT,
  `package_path=${sanitizedName}-${packageVersion}.tgz\n`,
  {encoding: 'utf-8'},
);
