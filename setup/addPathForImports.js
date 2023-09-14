const fs = require('fs');
const path = require('path');

const tsConfigPath = path.resolve('tsconfig.json');
const jsConfigPath = path.resolve('jsconfig.json');

const addPathForImports = (userFolderNameInput) => {
  const folderName = userFolderNameInput || 'navigation';

  console.log('> Adding path for navigation imports');
  const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const writeJson = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  const modifyConfig = (config) => {
    const hasBaseUrl = config.compilerOptions && config.compilerOptions.baseUrl;
    const aliasToAdd = {
      '@navigation/*': hasBaseUrl ? [`${folderName}/*`] : [`./${folderName}/*`],
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
    console.log('> Added path to tsconfig.json');
  } else if (fs.existsSync(jsConfigPath)) {
    const jsConfig = readJson(jsConfigPath);
    const modifiedJsConfig = modifyConfig(jsConfig);
    writeJson(jsConfigPath, modifiedJsConfig);
    console.log('> Added path to jsconfig.json');
  } else {
    const jsConfig = modifyConfig({
      compilerOptions: {},
    });
    writeJson(jsConfigPath, jsConfig);
    console.log('> Added path to jsconfig.json');
  }
  console.log('>');
};

module.exports = addPathForImports;
