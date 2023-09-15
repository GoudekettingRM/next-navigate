import * as fs from 'fs';

const configName = 'next-navigation.config.json';

const baseConfig = {
  outDir: '',
  pagesDir: '',
};

const createConfig = (userFolderNameInput: string, pagesFolder: string): void => {
  console.log('> Creating config file');
  if (!fs.existsSync(configName)) {
    baseConfig.outDir = userFolderNameInput;
    baseConfig.pagesDir = pagesFolder;
    fs.writeFileSync(configName, JSON.stringify(baseConfig, null, 2));
    console.log(`> Created ${configName}`);
  }
  console.log('>');
};

export default createConfig;
