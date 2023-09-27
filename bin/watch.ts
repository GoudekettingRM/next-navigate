import chokidar from 'chokidar';
import { promises as fsp } from 'fs';
import { infoMessage } from '../src/utils/automaticGenerationInfo';
import { outputFolder } from '../src/utils/folderName';
import { getPathOptions } from '../src/watcher/getPathOptions';
import { getConfig } from './setup/createConfig';
import { getTypeDefinitions } from './setup/getTypeDefinitions';

const watch = async () => {
  const pathOptions = await getPathOptions();
  const typeDefinitions = await getTypeDefinitions(pathOptions);
  const newContent = `${infoMessage}

${typeDefinitions}

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
