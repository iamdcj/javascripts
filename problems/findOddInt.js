// Approach A.
function findOdd(ints) {
  // counts table
  const counts = {};

  // iterate over each int.
  ints.forEach(int =>
    // if count exits in table
    // increase its cunt
    counts[int] ? counts[int]++ : (counts[int] = 1)
  );

  for (let int in counts) {
    if (counts[int] % 2 === 1) {
      return parseInt(int, 10);
    }
  }
}

findOdd([1, 1, 2, 3, 4, 4, 4, 3, 2, 2, 2]);
