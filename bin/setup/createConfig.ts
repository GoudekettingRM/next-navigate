import * as fs from 'fs';

const configName = 'next-navigation.config.json';

const baseConfig = {
  outDir: '',
};

const createConfig = (userFolderNameInput: string): void => {
  console.log('> Creating config file');
  if (!fs.existsSync(configName)) {
    baseConfig.outDir = userFolderNameInput || 'navigation';
    fs.writeFileSync(configName, JSON.stringify(baseConfig, null, 2));
    console.log(`> Created ${configName}`);
  }
  console.log('>');
};

export default createConfig;
