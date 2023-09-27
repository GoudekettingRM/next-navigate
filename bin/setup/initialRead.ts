import { promises as fsp } from 'fs';
import { infoMessage } from '../../src/utils/automaticGenerationInfo';
import { outputFolder } from '../../src/utils/folderName';
import { getPathOptions } from '../../src/watcher/getPathOptions';
import { getTypeDefinitions } from './getTypeDefinitions';

export const initialRead = async (): Promise<void> => {
  const pathOptions = await getPathOptions();
  const typeDefinitions = await getTypeDefinitions(pathOptions);
  const newContent = `${infoMessage}

${typeDefinitions}

export const routes = ${JSON.stringify(pathOptions, null, 2)};
`;
  await fsp.writeFile(`${outputFolder}/routes.ts`, newContent);
};
