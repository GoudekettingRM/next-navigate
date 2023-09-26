import fs from 'fs';

export const isTsProject = () => {
  return fs.existsSync('tsconfig.json');
};
