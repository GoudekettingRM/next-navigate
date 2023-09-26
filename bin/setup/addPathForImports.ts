import fs from 'fs';
import path from 'path';
import { outputFolder } from '../../src/utils/folderName';

const tsConfigPath = path.resolve('tsconfig.json');
const jsConfigPath = path.resolve('jsconfig.json');

const addPathForImports = () => {
  console.log('Adding path for navigation imports');
  const readJson = (filePath: string): Record<string, unknown> => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  };
  const writeJson = (filePath: string, data: Record<string, unknown>) => {
    return fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  };

  const modifyConfig = (config: { compilerOptions?: { baseUrl?: string; paths?: Record<string, string[]> } }) => {
    const hasBaseUrl = config.compilerOptions?.baseUrl;
    const aliasToAdd = {
      '@next-navigate/*': hasBaseUrl ? [`${outputFolder}/*`] : [`./${outputFolder}/*`],
    };

    config.compilerOptions = config.compilerOptions || {};
    config.compilerOptions.paths = {
      ...config.compilerOptions.paths,
      ...aliasToAdd,
    };

    return config;
  };

  if (fs.existsSync(tsConfigPath)) {
    const tsConfig = readJson(tsConfigPath);
    const modifiedTsConfig = modifyConfig(tsConfig);
    writeJson(tsConfigPath, modifiedTsConfig);
    console.log('Added path to tsconfig.json');
  } else if (fs.existsSync(jsConfigPath)) {
    const jsConfig = readJson(jsConfigPath);
    const modifiedJsConfig = modifyConfig(jsConfig);
    writeJson(jsConfigPath, modifiedJsConfig);
    console.log('Added path to jsconfig.json');
  } else {
    const jsConfig = modifyConfig({
      compilerOptions: {},
    });
    writeJson(jsConfigPath, jsConfig);
    console.log('Added path to jsconfig.json');
  }
};

export default addPathForImports;
