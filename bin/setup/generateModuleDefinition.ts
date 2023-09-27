import { promises as fsp } from 'fs';
import { infoMessage } from '../../src/utils/automaticGenerationInfo';
import { outputFolder } from '../../src/utils/folderName';
import { getTPageNamesContent } from '../../src/watcher/generatePageNames';

export const generateModuleDefinition = async (pathOptions: Record<TPageNames, TPageEntry>) => {
  const pageNamesType = await getTPageNamesContent(pathOptions);

  const newContent = `${infoMessage}\n\n
declare global {
  type TPageEntry = {
    path: string;
    params: string[] | null;
  }

  type ParamObject<Params extends string[]> = {
    [key in Params[number]]: string;
  };

  type ParamsAreEmpty<Params extends string[]> = Params extends [] ? true : false;

  ${pageNamesType}

  const routes: Record<TPageNames, TPageEntry>;
}

export {};
`;

  await fsp.writeFile(`${outputFolder}/next-navigate.d.ts`, newContent);
};
