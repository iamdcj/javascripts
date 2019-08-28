# Identifiers

Identifiers are a series of characters which point to a chunk of code in an application.

Identifiers are used to reference bindings, for example:

- **Variables**: a chunk of code stored in a variable.
- **Function**: reusable chunks of code which perform a specific task
  - parameters/arguments.
- **Properties**: object keys.

Using identifiers in our code allows for easy code reuse; pieces of code can be accessed multiple times in various places.

## Identifier Rules

When creating an identifier for a binding it is important to respect the following rules:

### Initial Character

The initial character in the identifier must be one of the following;

- Letter (a - z)
- Underscore (`_`)
- Dollar sign (\$)

A number is not valid as the first character of an identifier in JavaScript - if numbers could be used an identifiers initial character the engine would be unable to distinguish between numbers and labels.

### Valid vs. Invalid

The following are all valid identifiers.

#### Valid

```
const foo = "bar";
let _bar = "foo";

function f00(_baz) {
  console.log(_baz);
}

const $bodyEl = document.querySelector('body');

const _0bj = {
  _nam3: "David",
  $age: 32


```

#### Invalid

The following are all invalid identifiers;

```
const 4oo = "Egg";

function 8az() {
  return true;
}
```

the above identifiers would all result the following syntax error;
`Uncaught SyntaxError: Invalid or unexpected token`
