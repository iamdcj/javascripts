# Temporal Dead Zone

The TDZ is the 'space' between a reference to a particular `let` or `const` statement, and its actual declaration/initialization.

Any reference to a variable declared with `let` or `const` before it is initialised will result in a `referenceError`

```
console.log(bc);
/* ==========
* ===========
* === TDZ ===
* ===========
=========== */
let bc = "🦕 Dinosaurs 🦖";

Cannot access 'bc' before initialization
```

The `bc` variable is referenced before it is declared, which is not valid when using `const` or `let` statements; **the variable is in a `TDZ`**.

Prior to ES6 the above snippet would not result in an error; `var` statements are **hoisted** to the top of their respected lexical environments - the hoisted variables are essentially set with a starting value of `undefined`;

```
console.log(bc);
/* ==========
* ===========
* === TDZ ===
* ===========
=========== */
var bc = "🦕 Dinosaurs 🦖";
// undefined
```

**No error above.**

### Let, Const and Hoisting

The above snippet, and many resources out there, suggest that `let` and `const` variables are not 'hoisted' to the top of their respective lexical environments, however this isn't entirely accurate.

> The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated. - ECMAScript Specification.

This paragraph does suggest that `let` and `const` are indeed 'hoisted':

> The variables are created when their containing Lexical Environment is instantiated...

but the engine prevents them from being accessed until the engine has evaluated the respective binding, i.e. the engine does not allow access to the variable until it performs a right-hand-side(execution) lookup on the variable.

> but may not be accessed in any way until the variable’s LexicalBinding is evaluated.
