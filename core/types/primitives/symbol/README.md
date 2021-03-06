# Symbol

### `typeof` symbol

The `symbol` primitive is a datatype that is used to add unique properties on an object. 

#### __Creating Symbols__
A symbol can be created using the constructor-like✴ function;
```
const sym1 = Symbol();
const descriptiveSymbol = Symbol('aLabel');
```

✴ Symbol is not a complete constructor due to its lack of support for the `new` operator.

#### __Using Symbols__

Symbols are useful for generating unique object keys or values, and storing 'private' members in our objects.

### Unique Keys
Each time a property is added to an object using a `symbol` it will always be unique; there is no danger of naming collisions.

### Private Data
When used to generate unqiue object keys, the values stored in these keys cannot be easily accessed, adding a layer of privacy that isn't there with regular string keys;

---
[FreeCodeCamp](https://www.freecodecamp.org/news/how-did-i-miss-javascript-symbols-c1f1c0e1874a/)
[PonyFoo](https://ponyfoo.com/articles/es6-symbols-in-depth)