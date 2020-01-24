const countBits = n => {
  // get binary rep.
  const binary = n.toString(2);

  // generate array from binary
  // usw reduce to return bit size
  return binary.split("").reduce((acc, n) => {
    return acc + parseInt(n, 10);
  }, 0);
};

countBits([1, 2, 3, 4, 5]);
