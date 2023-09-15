import fs from 'fs';

const makeOutputFolder = (userFolderNameInput: string): void => {
  const outputFolder = userFolderNameInput || 'navigation';

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
    console.log('> Created your output folder');
  } else {
    console.log('> Output folder already exists');
  }
  console.log('>');
};

export default makeOutputFolder;
