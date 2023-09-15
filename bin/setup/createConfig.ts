import * as fs from 'fs';
import * as path from 'path';

const configName = 'next-navigation.config.json';

const baseConfig = {
  outDir: '',
};

const createConfig = (userFolderNameInput: string): void => {
  console.log('> Creating config file');
  console.log('path.resolve', path.resolve(configName));
  if (!fs.existsSync(configName)) {
    baseConfig.outDir = userFolderNameInput || 'navigation';
    fs.writeFileSync(configName, JSON.stringify(baseConfig, null, 2));
    console.log(`> Created ${configName}`);
  }
  console.log('>');
};

export default createConfig;
