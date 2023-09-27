#!/usr/bin/env node
const pagesFolder = process.argv[2]!;

import setupImport from './addPathForImports';
import copyFunctions from './copyFunctions';
import createConfig from './createConfig';
import createDefaultExports from './createDefaultExports';
import { initialRead } from './initialRead';
import makeOutputFolder from './makeOutputFolder';

const main = async () => {
  makeOutputFolder();
  setupImport();
  createConfig(pagesFolder);
  copyFunctions();
  createDefaultExports();
  initialRead();
};

main();
