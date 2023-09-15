import walk from './walk';

const getPathOptions = async () => {
  const files = await walk(pathToWatch);
  const filteredFiles = filterFiles(files);
  const convertedFiles = convertIndexFiles(filteredFiles);
  return generatePathOptions(convertedFiles);
};

export default getPathOptions;
