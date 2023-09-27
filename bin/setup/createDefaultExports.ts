import { promises as fsp } from 'fs';
import { infoMessage } from '../../src/utils/automaticGenerationInfo';
import { outputFolder } from '../../src/utils/folderName';

const generateModuleDefinition = async () => {
  const newContent = `${infoMessage}\n\n
import { routes } from './routes';
import { useNavigation } from './useNavigation';

export default { routes, useNavigation };
export { routes, useNavigation }
`;

  await fsp.writeFile(`${outputFolder}/index.ts`, newContent);
};

export default generateModuleDefinition;
