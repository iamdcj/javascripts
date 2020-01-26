// Return the length of the longest sequence
// without repeat characters

const returnLength = sequence => {
  let longestLength = null;
  let currentSequence = [];

  // iterate over sequence
  // add char to currentSequence
  // if char is in currentSequence
  // empty currentSequence, start over
  // store length in longest length
  sequence.forEach(element => {
    if (currentSequence.length < 1) {
      return currentSequence.push(element);
    }

    if (currentSequence.includes[element]) {
      if (currentSequence.length > longestLength) {
        longestLength = currentSequence.length;
      }

      currentSequence = [];
      currentSequence.push(element);
    } else {
      currentSequence.push(element);
    }
  });

  return longestLength;
};

console.log(returnLength([1, 2, 3, 3, 3, 4, 5])); // expect 3
console.log(returnLength([2, 2, 3, 3, 3, 4, 5, 6])); // 4
console.log(returnLength([1, 1, 1, 3, 3, 4, 4, 4])); // 2
