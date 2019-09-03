# Identifier Rules: Functions and Variables

When creating an identifier for a function/variable the engine enforces the following rules;

## Initial Character

The initial character in the identifier must be one of the following;

- Letter (`a - z`)
- Underscore (`_`)
- Dollar sign (`$`)

A digit(`0-0`) is not valid as the first character of an identifier in JavaScript; the engine needs to distinguish between `number`s and labels.

## Reserved Words

The engine will throw an error if the engineer attempts to use a reserved, or to-be reserved word in the language.

```
const var = "foo"
// Unexpected token var

const let = "foo";
// let is disallowed as a lexically bound name;s
```

The reserved words differ from implementation and mode - this [Identifier Validator](https://mothereff.in/js-variables) tool will validate any identifier.

See [reserved word](./reserved-words) for more detail.

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

---

#### Resources

[Identifiers](https://mathiasbynens.be/notes/javascript-identifiers-es6)
[Identifier Validator](https://mothereff.in/js-variables)
