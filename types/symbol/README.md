# Symbol

### `typeof` symbol

The `symbol` primitive is a datatype that is used to add unique properties on an object. 

### Creating Symbols
A symbol can be created using the constructor-like* function;
```
const sym1 = Symbol();
const descriptiveSymbol = Symbol('aLabel');
```

* Symnol is not a complete constructor due to its lack of support for the `new` operator.

Symbols are useful for generating unique object keys, and storing private data.

### Unique Keys
Each time a property is added to an object using a `sybmol` it will always be unique; there is no danger of naming collisions;

### Private Data
When used to generate unqiue object keys, the values stored in these keys cannot be easily accessed, adding a layer of privacy that isn't there with regular string keys;

