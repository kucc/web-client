const makeArray = (len: number) => {
  const nLengthArray = [...Array(len).keys()];

  return nLengthArray.map(i => i + 1);
};

export default makeArray;
