#!/usr/bin/env node
const folderName = process.argv[2];

import setupImport from './addPathForImports';
import createConfig from './createConfig';
import makeOutputFolder from './makeOutputFolder';

const main = async () => {
  if (!folderName) throw new Error('Please provide a folder name');

  makeOutputFolder(folderName);
  setupImport(folderName);
  createConfig(folderName);
};

main();