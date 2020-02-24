# Object.entries()

The `.entries` method returns an array from the object, containing the object's `key:value` pairs.

**Original Object**

```
const bigDave = {
  name: 'David',
  age: 32
};
```

**Result**

```
console.log(Object.entries(bigDave));

// 0: (2) ["name", "David"]
// 1: (2) ["age", 32]
```

## Iterating over result

If you want to access the `key;value` pairs from the result, array destructing comes into its own;

```
Object.entries(bigDave).forEach(([key, value]) => console.log(`${key}: ${value}`));

// name: David
// age: 32
```
