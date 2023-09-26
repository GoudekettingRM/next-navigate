export const captureBetweenBrackets = (path: string): string[] => {
  const regex = /\[+([^[\]]+)\]+/g;
  const captures: string[] = [];

  let match;
  while ((match = regex.exec(path)) !== null) {
    if (match[1] === undefined) continue;

    captures.push(match[1]);
  }

  return captures.filter((capture) => typeof capture !== 'undefined');
};
