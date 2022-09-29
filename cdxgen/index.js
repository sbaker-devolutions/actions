const fs = require('fs');
const core = require('@actions/core');
const cdxgen = require('@appthreat/cdxgen');
const execSync = require('child_process').execSync;

try {
  try {
    execSync('cdxgen --help');
  } catch (error) {
    console.log('Installing cdxgen...');
    let output = execSync('npm install -g @appthreat/cdxgen', { encoding: 'utf-8' });
    console.log(output);
  }

  let output = execSync('cdxgen -r true -o bom.xml', { encoding: 'utf-8' });
  console.log(output);

} catch (error) {
  core.setFailed(error.message);
}