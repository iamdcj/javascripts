// Timeout
function timeoutCallBack() {
  console.log("Hello");
}

setTimeout(timeoutCallBack, 2000);

// Interval
function intervalCallBack() {
  console.log("Hello");
}

setInterval(intervalCallBack, 2000);

// XHR
function XHRCallBack() {
  console.log(this.response);
}

const request = new XMLHttpRequest();
request.addEventListener("load", XHRCallBack);

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();

// Fetch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => console.log(response))
  .catch(error => console.error(error.message));

// Synchronous
function a(callBack) {
  callBack();
}

a(() => console.log("HEY"));

// User Input
const El = document.querySelector(".btn");

function clickCallBack() {
  console.log("clicked", this);
}

El.addEventListener("click", clickCallBack);
