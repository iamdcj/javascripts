# for...in

The `for...in` statement iterates over an objects enumerable string keys, **providing access to the object or array index, not the item value**.

---

The following example iterates over an `object`;

```
const letterToInt = {
  a: 1,
  b: 2,
  c: 3
}
```

The looping mechanism provides access to the enumerable properties in the object, i.e. it will give you the index, opposed to the actual element:

```
for(const letter in letterToInt) {
  console.log(letterToInt[letter])
}

// 1
// 2
// 3

```

### Arrays

The `for...in` mechanism can be used to iterate over an array, however there a couple of reasons why using `for...in` isn't the best tool for the job.

#### Orderliness

The `for...in` mechanism does not guarantee items will be returned in a particular order, i.e. it does not respect the ordinal order of the index even when working with arrays; arrays are just objects with ordinal keys. The lack of order is more of an issue when dealing with multiple platforms.

If a guaranteed order is required, `for...in` is not the one.

#### Additional Properties

The `for...in` looping construct will iterate over any string properties added to the array `object`

```
const arr = ['foo', 'bar'];

arr.eggs = "ham"

for(item in arr) {
  console.log(arr[item])
}

// foo
// bar
// ham
```

The above case isn't all that likely to occur, but it is just another reason not to use `for...in` for iterating over arrays.

There are other constructs which are better suited for dealing with arrays; `for`, `for...of`, and the `forEach` method.

## TL;DR

- `for...in` is best used when iterating over `object` properties.
- It can be useful for debugging/logging object data, or checking for a specific `key`:`value`.

---

References

- [For vs forEach() vs for/in vs for/of in JavaScript](https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript.html)
- [ES6 In Depth: Iterators and the for-of loop](https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop)
- [“for…in” with array iteration a bad idea?](https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea)
