// Approach A.
function findOdd(ints) {
  // counts table
  const counts = {};

  // iterate over each int.
  ints.forEach(int => {
    // if count exits in table
    // increase its cunt
    if (counts[int]) {
      counts[int]++;
    } else {
      // add it to table
      counts[int] = 1;
    }
  });

  for (let int in counts) {
    if (counts[int] % 2 === 1) {
      return parseInt(int, 10);
    }
  }
}
