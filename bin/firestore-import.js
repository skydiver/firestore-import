#! /usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
  .option('-c, --credentials', 'Credentials file')
  .option('-f, --file', 'File to import')
  .option('-d, --name', 'Database name to import. If ommited, filename will be used.')
  .option('-t, --type <items>', 'Source file type', ['csv'])
  .version(pkg.version)
  .description(pkg.description);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}