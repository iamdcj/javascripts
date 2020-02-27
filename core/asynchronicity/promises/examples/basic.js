const testPromise = int => {
  return new Promise((resolve, reject) => {
    if (int >= 1) {
      resolve({ success: true });
    } else {
      reject({ message: "tits up" });
    }
  });
};

const testA = testPromise(1);
const testB = testPromise(0);

// This succss, and will return what is passed to the resolve method
testA
  .then(response => console.log(response)) // success: true
  .catch(e => console.log(e.message));

// This fails, and will return what is passed to the reject method
testB
  .then(response => console.log(response))
  .catch(e => console.log(e.message)); // "tits up"
