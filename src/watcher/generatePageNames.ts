import { TPageEntry } from '../../trash/types';

export const getTPageNamesContent = async (pathOptions: Record<string, TPageEntry>) => {
  const routeKeys = Object.keys(pathOptions);

  return `type TPageNames =\n    | '${routeKeys.join("'\n    | '")}';\n`;
};
