import { promises as fsp } from 'fs';
import { infoMessage } from '../../src/utils/automaticGenerationInfo';
import { outputFolder } from '../../src/utils/folderName';

const generateModuleDefinition = async () => {
  const newContent = `${infoMessage}\n\n
import NNLink from './NNLink';
import { isRouteWithParams } from './isRouteWithParams';
import { routes } from './routes';
import {
  type ExtractRouteParams,
  type GetPath,
  type Navigate,
  type Routes,
  type RoutesWithParams,
  type RoutesWithoutParams,
} from './types';
import { useNavigation } from './useNavigation';

export {
  ExtractRouteParams,
  GetPath,
  NNLink,
  Navigate,
  Routes,
  RoutesWithParams,
  RoutesWithoutParams,
  isRouteWithParams,
  routes,
  useNavigation,
};
`;

  await fsp.writeFile(`${outputFolder}/index.ts`, newContent);
};

export default generateModuleDefinition;
