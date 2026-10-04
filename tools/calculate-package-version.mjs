import packageJson from '../package.json' with {type: 'json'};
import {writeFileSync, appendFileSync} from 'node:fs';

const baseVersion = packageJson.version;
const {PR_NUMBER, COMMIT_SHA, GITHUB_OUTPUT} = process.env;

const packageVersion = `${baseVersion}-${PR_NUMBER}-${COMMIT_SHA}`;

const packageJsonContent = {
  ...packageJson,
  version: packageVersion,
};

writeFileSync('../package.json', JSON.stringify(packageJsonContent, null, 2));

const sanitizedName = packageJsonContent.name
  .replace('@', '')
  .replace('/', '-');

appendFileSync(GITHUB_OUTPUT, `package_version=${packageVersion}\n`);
appendFileSync(
  GITHUB_OUTPUT,
  `package_path=${sanitizedName}-${packageVersion}.tgz\n`,
);
