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
```

The reserved words differ from implementation, mode and context, e.g. `let` is fine to be used as an identifier prior to the ES2015 specification;

#### [ES5](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6.1) ✅

```
var let = "foo";
console.log(let) // foo
```

but any engine adhering to ES6 will throw an error if `let` is used as an identifier;

#### [ES6](https://www.ecma-international.org/ecma-262/6.0/#sec-reserved-words) ❌

```
var let = "foo";
// let is disallowed as a lexically bound name
```

See [Reserved Words](./reserved-words) for more detail.

[Identifier Validator](https://mothereff.in/js-variables) will validate any identifier.

---

#### Resources

[Identifiers](https://mathiasbynens.be/notes/javascript-identifiers-es6)
