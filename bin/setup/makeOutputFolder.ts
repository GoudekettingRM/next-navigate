import fs from 'fs';
import { outputFolder } from '../../src/utils/folderName';

const addTmpToGitignore = (): void => {
  const gitignoreContent = fs.existsSync('.gitignore') ? fs.readFileSync('.gitignore', 'utf-8') : '';
  if (!gitignoreContent.includes('/tmp')) {
    fs.appendFileSync('.gitignore', '\n/tmp');
    console.log('Added "/tmp" to .gitignore');
  } else {
    console.log('"/tmp" already exists in .gitignore');
  }
};

const makeOutputFolder = (): void => {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
    console.log('Created output folder');
  } else {
    console.log('Output folder already exists');
  }

  addTmpToGitignore();
};

export default makeOutputFolder;
