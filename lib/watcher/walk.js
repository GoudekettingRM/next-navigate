const walk = async (dir, rootDir = dir) => {
  let results = [];
  const list = await fsp.readdir(dir);

  const promises = list.map(async (file) => {
    const filePath = path.resolve(dir, file);
    const stat = await fsp.stat(filePath);
    if (stat.isDirectory()) {
      const nestedFiles = await walk(filePath, rootDir);
      results = results.concat(nestedFiles);
    } else {
      const relativePath = removeExtension(path.relative(rootDir, filePath));
      results.push(relativePath);
    }
  });
  await Promise.all(promises);

  return results;
};

export default walk;
