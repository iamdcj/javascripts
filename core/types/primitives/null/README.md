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

### Checking for `null`

The `typeof` return value `object` for null is considered a bug by most, and the consensus among programmers is that it really should return "null", thus making it easier to check for `null` in our programs.

Alas, the `typeof` return value will likely never be changed due to the risk to legacy programs, so if you need to check for null, here is a good way to do it.

```
const a = null;

(!a && typeof a === "object");
```

> `null` is the only primitive value that is "falsy" (aka false-like; see Chapter 4) but that also returns "object" from the typeof check. - Kyle Simpson, Types & Grammar - Chapter 1
