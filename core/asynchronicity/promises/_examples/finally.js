// ===== FINALLY ===== //

// --- Resolved
const promiseKept = new Promise((resolve, reject) => {
  resolve("Nice");
});

promiseKept
  .then(response => console.log(response))
  .finally(() => console.log("all done"));
// nice
// all done

// --- Rejected
const promiseBroken = new Promise((resolve, reject) => {
  reject("naughty");
});

promiseBroken
  .then(response => console.log(response))
  .catch(response => console.log(response))
  .finally(() => console.log("all done"));

// naughty
// all done
