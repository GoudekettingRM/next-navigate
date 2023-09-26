import fs from 'fs';

export const configName = '.next-navigaterc';

const baseConfig = {
  pagesDir: '',
};

export type TConfig = typeof baseConfig;

export const getConfig = async (): Promise<TConfig> => {
  return await require('rc')('next-navigate', {
    pagesDir: '',
  });
};

const createConfig = (pagesFolder: string): void => {
  console.log('Creating config file');
  if (!fs.existsSync(configName)) {
    baseConfig.pagesDir = pagesFolder;
    fs.writeFileSync(configName, JSON.stringify(baseConfig, null, 2));
    console.log(`Created ${configName}`);
  }
};

export default createConfig;
