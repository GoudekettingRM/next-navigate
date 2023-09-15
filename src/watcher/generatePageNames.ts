// import { TPageEntry } from '../types';

// export const generateTPageNames = async (pathOptions: Record<string, TPageEntry>) => {
//   console.log('>> Updating TPageNames...');
//   const routeKeys = Object.keys(pathOptions);

//   const newContent = `${warning}\n\nexport type TPageNames =\n  | '${routeKeys.join(
//     "'\n  | '",
//   )}';\n`;

//   await fsp.writeFile(pageNamesPath, newContent);
//   console.log('>> Done!');
// };
