// This function returns a different
// value each time it is called
const returnDate = () => {
  const now = new Date();

  return now;
};

console.log(returnDate());
