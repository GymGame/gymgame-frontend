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

export const calculateNFTGeneration = (avaxMintStarted: boolean, gainsMintStarted: boolean): number => {
  if (!avaxMintStarted) {
    return -1;
  }

  if (avaxMintStarted && !gainsMintStarted) {
    return 0;
  }

  return 1;
};
