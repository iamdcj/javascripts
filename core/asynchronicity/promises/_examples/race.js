const promiser = (id, delay) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay, id);
  });
};

// timeout
function timeout(timeout, promise) {
  let timer;

  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => {
      reject(Error("TIMED OUT"));
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timer);
  });
}

timeout(1250, promiser("a", 3000))
  .then(value => console.log(value))
  .catch(e => console.log(e.message));

// TIMED OUT

timeout(250, promiser("a", 100))
  .then(value => console.log(value))
  .catch(e => console.log(e.message));

// a
