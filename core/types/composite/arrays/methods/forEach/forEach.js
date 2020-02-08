// Simply Iterations
const ints = [1, 2, 3];

ints.forEach(int => {
  console.log(int);
});

const plusOne = ints.forEach(int => {
  return int + 1;
});

console.log(plusOne); // undefined
