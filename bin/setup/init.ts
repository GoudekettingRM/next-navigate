#!/usr/bin/env node
const pagesFolder = process.argv[2]!;

import setupImport from './addPathForImports';
import createConfig from './createConfig';
import { initialRead } from './initialRead';
import makeOutputFolder from './makeOutputFolder';

const main = async () => {
  makeOutputFolder();
  setupImport();
  createConfig(pagesFolder);
  initialRead();
};

main();
