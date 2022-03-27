export const convertNumberToString = (num: number): string => {
  if (num === 0) return '0';
  const arr = num.toString().split('');
  let resString = '';
  let j = 1;

  for (let i = arr.length - 1; i >= 0; i--, j++) {
    if (j % 3 === 0 && i !== 0) {
      resString = ',' + arr[i] + resString;
    } else {
      resString = arr[i] + resString;
    }
  }

  return resString;
};
