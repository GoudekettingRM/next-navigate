import fs from 'fs';
import { outputFolder } from '../../src/utils/folderName';

const makeOutputFolder = (): void => {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
    console.log('Created output folder');
  } else {
    console.log('Output folder already exists');
  }
};

export default makeOutputFolder;
