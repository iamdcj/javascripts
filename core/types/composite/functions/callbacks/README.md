# Callback Functions

At a high-level a callback is simply a function which runs when some other processing has completed, or failed. They are most often utilised when dealing with some asynchronous operation, but can be passed as an argument to a regular, synchronous function.

_The motivation behind callback functions is to prevent any blocking operations in our application_, see [event loop](../../../../execution/event-loop).

I really like the following analogy by [Jesstern Rays](https://www.youtube.com/watch?v=Qe0IKzAB1OE)

> A callback is like asking a butler to make you a sandwich; you can stand and wait for him to do this, or you go off an do something else until he informs you that the sandwich is ready.

So, let's put that into code;

#### Make Sandwich (blocking)

The following function will take an array of items, do some processing using that data, then `return` an array;

```
const makeSandwich = ingredients => {
  let sandwich = [];

  addBread = index => {
    sandwich.splice(index, 0, 'bread')
  }

  addBread(0);

  ingredients.forEach(ingredient => {
    sandwich = [...sandwich, ingredient]
  })

  addBread(sandwich.length);

  return sandwich;
}

makeSandwich(['bacon', 'lettuce', 'tomato'])
// ["bread", "bacon", "lettuce", "tomato", "bread"]
```

We would have to wait on all of this code running before we could move on to something else, which isn't ideal, so let's refactor;

#### Make Sandwich (async)

The following function also makes a sandwich, but utilises a [`Promise`](../../../../asynchronicity/promises/) which returns the result of some async. operation using an `object`

```
const makeSandwich = ingredients => {

  return new Promise(resolve => {
    let sandwich = [];

  addBread = index => {
    sandwich.splice(index, 0, 'bread')
  }

  addBread(0);

  ingredients.forEach(ingredient => {
    sandwich = [...sandwich, ingredient]
  })

  addBread(sandwich.length);

  resolve(sandwich);
  })

}
```

Now we have our async. sandwich maker, let's run it;

```
makeSandwich(['bacon', 'lettuce', 'tomato'])
.then(response => console.log(response))

// ["bread", "bacon", "lettuce", "tomato", "bread"]

```

we get the same result, but instead of waiting around, we instead run a **callback** when the `Promise` resolves with our sandwich.

### **Callback Varieties**

The above 👆 example runs a callback on an engineer defined promise, however there are a number of common cases for utilising callback functions; [user events](../../../../../apis/DOM/events), [timeouts](../../../../../apis/DOM/timeouts), [data fetching](../../../../../apis/fetch)

#### User Events

Arguably the most common use-case for callback functions, at least on the client-side, is handling some user input/event, e.g. `click`; we need to respond to whatever the user does, and this is achieved by passing a callback to whatever function/listener is monitoring the event.

**Click**
The following example monitors the element for click events, when the element is clicked, the `callBack` function is added to the [task queue](../../../../execution/event-loop/task-queue);

```
const _CTA = document.querySelector('button');

function callBack() {
  console.log(this)
}

_CTA.addEventListener('click', callBack);
```

#### Timing APIs

Another common use-case for **callback** functions is when dealing with the `setTimeout` and `setInterval` Web APIs - allowing you to do something after/every `x` amount time.

**Timeout**
The `setTimeout` method provides a means to run some operation, via a **callback**, after the defined timer has expired;

```
function callBack() {
  console.log('Hello')
}

setTimeout(callBack, 2000);

// ....2000ms later
// Hello
```

**Interval**
The `setInterval` method provides a means to repeatedly run a time-delayed operation, via a **callback**.

```
function callBack() {
  console.log('Hello')
}

setInterval(callBack, 2000);

// Hello
// ....2000ms later
// Hello

```

#### Data Fetching

Fetching something from a server, then running a **callback** either on success or on failure of the operation is becoming more and more popular.

**[Fetch](../../../../../apis/fetch)**
The `fetch` API is now the goto for fetching data from some server, and utilises **callbacks** such as `then` and `catch` due to it being promise-based.

```
fetch('some-url/posts')
  .then(response => console.log(response))
  .catch(error => console.error(error.message))
```

**[XHR](../../../../../apis/XHR)**
The `XHR` API allows you to create a request via the `XMLHttpRequest` constructor, which will return an object for configuration.

The object can be 'listened' to as per other DOM events, and once loaded a **callback** can be ran.

```
function callBack() {
  console.log(this.response)
}

const request = new XMLHttpRequest();
request.addEventListener('load', callBack);

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
```

#### Node

Callbacks are a big thing in `node`, i.e. they are used all over the place in node applications.

```
const fileSystem = require("fs");

function nodeCallBack(error, stuff) {
  if (error) {
    console.log(error);
  } else {
    console.log(stuff);
  }
}

fileSystem.readFile("basic.js", "utf8", nodeCallBack);
```
