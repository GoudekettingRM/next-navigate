import { captureBetweenBrackets } from './captureBetweenBrackets';
import { prefixWithSlash } from './prefixWithSlash';

export const generatePathInformation = (fileName: string): { path: string; params: string[] } => {
  const baseData = { path: prefixWithSlash(fileName), params: [] };
  if (!fileName.match(/\[\[.*?\]\]|/g)) {
    return baseData;
  }

  const pathParams = captureBetweenBrackets(fileName);
  if (!pathParams.length) return baseData;

  return { path: prefixWithSlash(fileName), params: pathParams };
};
