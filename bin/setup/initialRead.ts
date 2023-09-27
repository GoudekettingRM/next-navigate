import { promises as fsp } from 'fs';
import { infoMessage } from '../../src/utils/automaticGenerationInfo';
import { outputFolder } from '../../src/utils/folderName';
import { getPathOptions } from '../../src/watcher/getPathOptions';
import { generateModuleDefinition } from './generateModuleDefinition';

export const initialRead = async (): Promise<void> => {
  const pathOptions = await getPathOptions();
  await generateModuleDefinition(pathOptions);
  const newContent = `${infoMessage}

export const routes = ${JSON.stringify(pathOptions, null, 2)};
`;
  await fsp.writeFile(`${outputFolder}/routes.ts`, newContent);
};
