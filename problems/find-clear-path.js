const solution = pot => {
  const check = pot.map((row, i) => {
    nextRow = pot[i + 1];

    if (!nextRow) {
      return;
    }

    return checkForPath(row, nextRow);
  });

  return !check.includes(false);
};

const returnIndexes = arr =>
  arr
    .map((c, i) => {
      return c === 0 ? i : null;
    })
    .filter(c => c !== null);

function checkForPath(row, nextRow) {
  const currentIndexes = returnIndexes(row);
  const nextIndexes = returnIndexes(nextRow);

  const intersection = currentIndexes.some(value => {
    return nextIndexes.includes(value);
  });

  return intersection;
}

console.log(
  solution([
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 1]
  ])
);

// https://leetcode.com/articles/the-maze-ii/
