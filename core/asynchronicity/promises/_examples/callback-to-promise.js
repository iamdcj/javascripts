const fileSystem = require("fs");

// Standard Node callback approach

fileSystem.readFile("basic.js", "utf8", (error, stuff) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stuff);
  }
});

// Promise-based alternative

const ReadFile = (path, encoding) => {
  return new Promise((resolve, reject) => {
    fileSystem.readFile(path, encoding, (error, stuff) => {
      if (error) {
        reject(error);
      } else {
        resolve(stuff);
      }
    });
  });
};

ReadFile("bollocks.js", "utf8")
  .then(response => console.log(response))
  .catch(e => console.log(e.message));
