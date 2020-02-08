# The `forEach` Method

The `forEach` method is an helper function which provides an easier/cleaner way of iterating over a collection of data.

The method is performed on an `array` or a [`set`](../../collections/sets).

`const ints = [1,2,3];`

`const alphabet = new Set(['a', 'b' , 'c']);`

and for each item in the given array/set it runs a callback function;

```
ints.forEach(int => {
  console.log(int)
})
```

```
alphabet.forEach(letter => {
  console.log(letter)
})
```

Unlike other `array` helpers, e.g. [map](../map), `forEach` does not return a value**; **its return value will always be `undefined`\*\*;

```
const plusOne = ints.forEach(int => {
  int + 1;
})

console.log(plusOne) // undefined
```

## Usage

The `forEach` method is a generic method; it doesn't do a particular thing with the data in a collection, instead simply runs a function on each item. There are usually more appropriate helper methods available, e.g. if you want to return a subset of an array based on a condition, then [filter](../filter) is your friend.

If there isn't a better method available to achieve whatever the goal is, then reach for `forEach`.

## Examples

It is a more succint way of writing a for loop;

```
for(let i = 0; i < ints.length; i++) {
  console.log(ints[i])
}
```

The regular `for` loop certainly does the job, however there are more parts to remember, making slighlty more complex to configure;

`for([initialExpression]; [condition]; [incrementExpression]) {...}`

Compared with the `forEach` method;

`[arr].forEach(callBack)`

The code becomes less error prone when it is simpler to write.

---

References
[Array - forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
[Set - forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)
