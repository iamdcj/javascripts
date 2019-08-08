# Strings

### `typeof` string

Strings are a series of characters contained within single or double quotations; they usually represent lines of text.

Examples:

```
"I am David"
'HOLA MUNDIAL'
`String bean`
```

### Immutability 
It is often thought that strings in JS are simply arrays of characters, but strings are immutable and cannot be modified, whereas arrays are mutable and can be modified and updated. 

This example illustrates how string methods don't update the original binding, but simply copy value, and store the modification in a new binding;
```
const name = "David";
const nameUC = name.toUpperCase();

console.log(name === nameUC); // false
console.log(name); // David
console.log(nameUC); // DAVID
```

The original binding does not change post `toUpperCase`, and the strict equality check confirms the original and the modified version are not the same; _primitives, like strings, are passed by value_

Certain array methods do modify the original binding in-place;

```
const arrayName = ["D","a","v","i","d"];
arrayName.push("J");

console.log(arrayName) // ["D", "a", "v", "i", "d", "J"]
```

The `push` method adds a member to the original array, it does not generate a copy of the original with the edit; _composites, like arrays, are passed by reference_


