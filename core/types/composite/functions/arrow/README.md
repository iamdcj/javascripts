# Arrow Functions

Arrows functions are a syntatical succint variant of regular functions in JavaScript, with the following benefits;

- ['Better' Context Binding](#this)
- [Shorter Syntax](#syntax)
- [Implicit Returns](#implicit-returns)
  - [Objects](#return-objects-implicitly)

They do not behave _exactly_ as per a regular functions, but do provide a faster method of declaring resuable chunks of executional code.

Every use of an arrow function is a ['function expression'](../#expressions).

## Syntax

The syntactical differences make for shorter function expressions;

##### Arrow

```
const sum = (x, y) => {
  return x + y;
}
```

##### Regular

```
const sum = function(x, y) {
  return x + y;
}
```

The main syntactically difference in the example above is the loss of the `function` keyword, however arrow functions do not require a regular block body, a more concise body can be utilised, this approach relies on implicit `return` values.

### Implicit Returns

The loss of the block body provides an even shorter function syntax - the following `function` does not have a regular block body, but uses an implicit return;

```
const sum = (x, y) => x + y;

sum(1,1); // 2
```

### Return Objects Implicitly

They are support implicitly returning object literal as a value;

const user = () => ({
name: "David",
age: 32
})

## Binding

They don't just differ syntatically from regular functions, there are a number of differences in relation to bindings.

### this

They do not bind to a new context when executed, i.e. it doesn't have its own `this` - instead, it binds to its parent calling context, for example:

```
const user = {
  name: "David",
  logUser() {
    console.log('NAME: ',this.name);

    const doubleLog = () => { console.log(this.name) }

    doubleLog()
  }
}

// NAME:  David
// David
```

If we use a regular function expression for `doubleLog` (`function doubleLog`), then we would get the following:

```
// NAME:  David
// undefind
```

The calling context for `doubleLog` is bound to the global object(`Window`).

### Elements

This isn't always a good thing, especially when adding callbacks to events on a `DOM` element.

If you use a regular function for the event listener callback, the calling context gets bound to the element object iself

##### HTML

```
<button>Clickity Click!</button>
```

##### JS

```
const _El = document.querySelector('button');

_El.addEventListener('click', function() {
  console.log(this);
})

// OnClick: <button>...

```

However this doesn't happen when using arrow functions for the callback; arrow functions are bound to their parent calling context, and will not be bound to the element object;

```
_El.addEventListener('click', () => {
  console.log(this);
})

// OnClick: Window...
```

### Cons of Arrow Functions

The above plus points are all useful for day-to-day engineering, however that doesn't mean they should be used for `all` function expressions; arrow functions do come with a few downsides;

- **Methods** - arrow functions are not good candidates for object methods; the object is not bound to the method's context (`this`)
- **Anonymous** - arrow functions cannot be named, making them all technically anonymous, and potentially difficult to trace when debugging.
- **`arguments`** - arrow functions do not possess an `arguments` object.
- **`new`** - you cannot use arrow functions as constructors functions in your applications.
- **`prototype`** - arrow functions do not possess a `prototype` object reference.
- **binding** - the binding behaviour is likely more of a good thing, but not _all_ the time.
