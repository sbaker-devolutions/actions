const core = require('@actions/core');
const github = require('@actions/github');
const cdxgen = require('@appthreat/cdxgen');

try {
  try {
    execSync('cdxgen --help');
  } catch (error) {
    console.log('Installing cdxgen...');
    let output = execSync('npm install -g @appthreat/cdxgen', { encoding: 'utf-8' });
    console.log(output);
  }


} catch (error) {
  core.setFailed(error.message);
}