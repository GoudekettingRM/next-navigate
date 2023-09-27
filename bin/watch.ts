import chokidar from 'chokidar';
import { promises as fsp } from 'fs';
import { infoMessage } from '../src/utils/automaticGenerationInfo';
import { outputFolder } from '../src/utils/folderName';
import { getPathOptions } from '../src/watcher/getPathOptions';
import { getConfig } from './setup/createConfig';
import { generateModuleDefinition } from './setup/generateModuleDefinition';

const watch = async () => {
  const pathOptions = await getPathOptions();
  await generateModuleDefinition(pathOptions);
  const newContent = `${infoMessage}

export const routes = ${JSON.stringify(pathOptions, null, 2)};
`;
  await fsp.writeFile(`${outputFolder}/routes.ts`, newContent);
};

getConfig().then((conf) => {
  const watcher = chokidar.watch(conf.pagesDir, { persistent: true, ignoreInitial: true });

  watcher.on('all', async (event) => {
    if (['addDir', 'add', 'unlink', 'unlinkDir'].includes(event)) {
      watch();
    }
  });
});
