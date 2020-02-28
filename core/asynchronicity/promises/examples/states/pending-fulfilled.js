const endpoint = "https://starwars.egghead.training/";

// generate promise
const responsePromise = fetch(`${endpoint}films`); //async result placeholder

// === PENDING ===
//before we have a result
console.log(responsePromise); // Promise {<pending>}

responsePromise.then(response => console.log(response));
// Response {type: "cors", url: "https://starwars.egghead.training/films", redirected: false, status: 200, ok: true, …}
// type: "cors"
// url: "https://starwars.egghead.training/films"
// redirected: false
// status: 200
// ok: true
// statusText: ""
// headers: Headers {}
// body: (...)
// bodyUsed: false

// === FULFILLED ===
// we have a result; promise is done and ready
console.log(responsePromise); // Promise {<resolved>: Response}

// return JSON from response - another async. .json returns another promise
console.log(responsePromise.then(response => response.json()));
// Promise {<pending>}

responsePromise
  .then(response => response.json())
  .then(data => console.log(data));

// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
console.log(responsePromise); // Promise {<resolved>: Response}

// We can pass a callback into the final then method to handle the fulfilled promise data
responsePromise.then(response => response.json()).then(someCallback);
