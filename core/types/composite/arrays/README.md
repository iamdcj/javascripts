# Arrays

### `typeof` object

Arrays are numerically ordered collections of data; they tend to contain numerous pieces of related data, but can be used as ordered containers for any type.

Arrays are zero-indexed, i.e. the first item in the array is position `0`, the second at `1`, and so forth. This provides the engineer an ability to retrieve items from an array by associating it with its index(see below)

###### String array

```
const names = ["David", "Stephanie", "Nole"];

const David = names[0] // retrieve item by index

```

JS arrays can contain an mixture of any valid datatype, including arrays, thus creating multi-dimensional arrays;

```
const mixedBag = [1, "two", { number: 3 }];

const mdArray = [
  [1,2,3,4,5],
  ["one", "two", "three", "four", "five]
]
```

Arrays are typeof object, but can be better considered a subtype of object; they are objects but with numerically indexed members, and they possess an updating `.length` property

```
console.log(names.length) // 3
```
---
### Working with Arrays
There are a number of built-in [methods](./methods) which assist engineers when working with ordinal ordered collections of data

