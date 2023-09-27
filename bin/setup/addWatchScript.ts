import fs from 'fs';
import path from 'path';
import T_npm_packageJSON from '../../package.json';

const packageJsonPath = path.resolve('package.json');

const addWatchScript = () => {
  type TPackageJson = typeof T_npm_packageJSON;

  const readJson = (filePath: string): TPackageJson => {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  };
  const writeJson = (filePath: string, data: TPackageJson) => {
    return fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  };

  const modifyConfig = (config: TPackageJson) => {
    const aliasToAdd = {
      'watch-pages': 'node node_modules/next-navigate/dist/bin/watch.js',
    };

    config.scripts = config.scripts || {};
    config.scripts = {
      ...config.scripts,
      ...aliasToAdd,
    };

    return config;
  };

  const jsConfig = readJson(packageJsonPath);
  const modifiedJsConfig = modifyConfig(jsConfig);
  writeJson(packageJsonPath, modifiedJsConfig);

  console.log('Added watch script to package.json');
};

export default addWatchScript;
