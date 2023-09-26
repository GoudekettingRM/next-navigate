export const convertIndexFiles = (files: string[]): string[] => {
  return files.map((file) => {
    if (file.endsWith('/index')) {
      return file.slice(0, -6);
    }

    if (file.endsWith('/page')) {
      return file.slice(0, -5);
    }

    if (['index', 'page'].includes(file)) {
      return '';
    }

    return file;
  });
};
