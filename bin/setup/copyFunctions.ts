import { promises as fsp } from 'fs';
import { outputFolder } from '../../src/utils/folderName';

const copyFunctions = async () => {
  const useNavigation = await fsp.readFile('./node_modules/next-navigate/dist/src/useNavigation.ts', 'utf-8');
  const types = await fsp.readFile('./node_modules/next-navigate/dist/src/types.ts', 'utf-8');
  const getPath = await fsp.readFile('./node_modules/next-navigate/dist/src/getPath.ts', 'utf-8');
  const isRouteWithParams = await fsp.readFile('./node_modules/next-navigate/dist/src/isRouteWithParams.ts', 'utf-8');
  const NNLink = await fsp.readFile('./node_modules/next-navigate/dist/src/NNLink.tsx', 'utf-8');

  await fsp.writeFile(`${outputFolder}/useNavigation.ts`, useNavigation);
  await fsp.writeFile(`${outputFolder}/types.ts`, types);
  await fsp.writeFile(`${outputFolder}/getPath.ts`, getPath);
  await fsp.writeFile(`${outputFolder}/isRouteWithParams.ts`, isRouteWithParams);
  await fsp.writeFile(`${outputFolder}/NNLink.tsx`, NNLink);
};

export default copyFunctions;
