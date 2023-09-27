import { getTPageNamesContent } from '../../src/watcher/generatePageNames';

export const getTypeDefinitions = async (pathOptions: Record<TPageNames, TPageEntry>) => {
  const pageNamesType = await getTPageNamesContent(pathOptions);

  const newContent = `export type TPageEntry = {
  path: string;
  params: string[] | null;
}

export ${pageNamesType}`;

  return newContent;
};
