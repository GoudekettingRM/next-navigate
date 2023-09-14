/* eslint-disable no-console */
const fs = require('fs');

const makeOutputFolder = (userFolderNameInput) => {
  const outputFolder = userFolderNameInput || 'navigation';

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
    console.log('> Created your output folder');
  } else {
    console.log('> Output folder already exists');
  }
  console.log('>');
};

module.exports = makeOutputFolder;
