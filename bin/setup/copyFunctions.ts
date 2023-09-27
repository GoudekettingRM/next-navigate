import { promises as fsp } from 'fs';
import { outputFolder } from '../../src/utils/folderName';

const copyFunctions = async () => {
  const content = await fsp.readFile('./node_modules/next-navigate/dist/src/useNavigation.ts', 'utf-8');

  await fsp.writeFile(`${outputFolder}/useNavigation.ts`, content);
};

export default copyFunctions;
