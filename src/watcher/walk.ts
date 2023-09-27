import { promises as fsp } from 'fs';
import path from 'path';
import { getConfig } from '../../bin/setup/createConfig';

const removeExtension = (str: string): string => {
  const lastDotIndex = str.lastIndexOf('.');
  if (lastDotIndex === -1) return str;
  return str.slice(0, lastDotIndex);
};

const walk = async (dir: string, rootDir = dir): Promise<string[]> => {
  const conf = await getConfig();

  let results: Array<string> = [];
  const list = await fsp.readdir(dir);

  const promises = list.map(async (file) => {
    const filePath = path.resolve(dir, file);
    const stat = await fsp.stat(filePath);

    if (stat.isDirectory() && !filePath.includes(`${conf.pagesDir}/api`)) {
      const nestedFiles = await walk(filePath, rootDir);
      results = results.concat(nestedFiles);
    } else {
      const fileName = path.basename(filePath);
      if (
        (filePath.endsWith('.tsx') ||
          filePath.endsWith('.jsx') ||
          filePath.endsWith('.ts') ||
          filePath.endsWith('.js')) &&
        !fileName.startsWith('layout') &&
        !fileName.startsWith('_') &&
        !fileName.startsWith('.') &&
        !fileName.startsWith('api/')
      ) {
        const relativePath = removeExtension(path.relative(rootDir, filePath));
        results.push(relativePath);
      }
    }
  });
  await Promise.all(promises);

  return results;
};

export default walk;
