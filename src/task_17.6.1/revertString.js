export function revertString(str) {
  if (typeof str !== 'string') {
    throw new Error('Not a string entered!');
  };

  let revertedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr += str[i];
  };
  return revertedStr;
}
