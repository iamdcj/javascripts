# Null

### `typeof` object

The `null` value represents an absence of a value - it is often used to symbolise a lack an object when returned from an API, or used as the starting value for variables which will later hold a proper value.

```
let updater = null;

updater = 1 + 1;
```

#### null vs undefined
It differs from `undefined` as `null` is used to initialize variables with a value that doesn't yet represent something, opposed to `undefined` which represents a variable without an initialized value.

```
var foo;

console.log(foo); // undefined

var bar = null;

console.log(bar); // null
```