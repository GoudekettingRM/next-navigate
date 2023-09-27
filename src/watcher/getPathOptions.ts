import { getConfig } from '../../bin/setup/createConfig';
import { generatePathInformation } from '../utils/generatePathInformation';
import { orderedObject } from '../utils/orderedObject';
import { convertIndexFiles } from './convertIndexFiles';
import walk from './walk';

const pathOptionsFrom = (files: string[]): Record<string, TPageEntry> => {
  return orderedObject(
    files.reduce((acc, file) => {
      const pageIdentifier = file
        .replace(/_?\[\[.*?\]\]_?|\[.*?\]/g, '')
        .replace(/\//g, '-')
        .replace(/-$/, '')
        .replace(/-+/g, '-')
        .replace(/-$/, '');

      acc[pageIdentifier === '' ? 'home' : pageIdentifier] = generatePathInformation(file);
      return acc;
    }, {} as Record<string, TPageEntry>),
  );
};

export const getPathOptions = async (): Promise<Record<string, TPageEntry>> => {
  const conf = await getConfig();

  const files = await walk(conf.pagesDir);
  const convertedFiles = convertIndexFiles(files);
  return pathOptionsFrom(convertedFiles);
};
