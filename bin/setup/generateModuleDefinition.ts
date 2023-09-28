import { promises as fsp } from 'fs';
import { infoMessage } from '../../src/utils/automaticGenerationInfo';
import { outputFolder } from '../../src/utils/folderName';
import { getTPageNamesContent } from '../../src/watcher/generatePageNames';

export const generateModuleDefinition = async (pathOptions: Record<TPageNames, TPageEntry>) => {
  const pageNamesType = await getTPageNamesContent(pathOptions);

  const newContent = `${infoMessage}\n\n
declare global {
  export type TPageEntry = {
    path: string;
    params: string[] | null;
  }

  export ${pageNamesType}
}

export {};
`;

  await fsp.writeFile(`${outputFolder}/next-navigate.d.ts`, newContent);
};
