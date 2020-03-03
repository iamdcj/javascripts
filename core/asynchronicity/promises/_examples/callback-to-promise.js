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
  return Promise((resolve, reject) => {
    fileSystem.readFile("basic.js", "utf8", (error, stuff) => {
      if (error) {
        resolve(reject);
      } else {
        resolve(stuff);
      }
    });
  });
};
