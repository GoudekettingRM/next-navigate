#!/usr/bin/env node
const readline = require('readline');

const setupImport = require('../setup/addPathForImports');
const makeOutputFolder = require('../setup/makeOutputFolder');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  reader.question(
    `
What do you want to name the output folder?

This is where your route overview will end up.
Leave empty if you want to use the default navigation/ folder.\n\n>>  `,
    (userInput) => {
      makeOutputFolder(userInput);
      setupImport(userInput);

      reader.close();
    },
  );
};

main();
