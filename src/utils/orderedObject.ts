import { TPageEntry } from '../../dist/src';

export const orderedObject = (object: any): Record<string, TPageEntry> => {
  return Object.keys(object)
    .sort()
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {} as Record<string, TPageEntry>);
};
