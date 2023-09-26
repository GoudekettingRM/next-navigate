import { promises as fsp } from 'fs';
import { warning } from '../../src/utils/automaticGenerationWarning';
import { outputFolder } from '../../src/utils/folderName';
import { getPathOptions } from '../../src/watcher/getPathOptions';
import { generateModuleDefinition } from './generateModuleDefinition';

export const initialRead = async (): Promise<void> => {
  const pathOptions = await getPathOptions();
  await generateModuleDefinition(pathOptions);
  const newContent = `${warning}

export const routes: Record<TPageNames, TPageEntry> = ${JSON.stringify(pathOptions, null, 2)};
`;
  await fsp.writeFile(`${outputFolder}/routes.ts`, newContent);
};
