const endpoint = "https://star-wars.egghead.training/";

// generate promise
const responsePromise = fetch(`${endpoint}films`); //async result placeholder

// === PENDING ===
//before we have a result
console.log(responsePromise); // Promise {<pending>}

//! ERRORS
//! GET https://star-wars.egghead.training/films net::ERR_SSL_PROTOCOL_ERROR
//! Uncaught (in promise) TypeError: Failed to fetch

// === Handling Rejections ===

// Handle top level failures
responsePromise.then(
  success => {
    console.log(success);
  },
  error => {
    console.error(error);
  }
);

// Handle return rejected promises
// in chained then
responsePromise
  .then(error => {
    throw new Error("bollocks");
  })
  .then(
    () => {
      console.log("");
    },
    error => {
      console.warn(error.message);
    }
  );
// bollocks

// Handle any chained promise failures with catch
responsePromise
  .then(success => {
    return Promise.reject("bollocks").then(data => console.log("good stuff"));
  })
  .catch(e => console.warn(e));

// bollocks
