# Generator Functions
Generators functions are a special type of function that can be exited, and re-entered at some time in the future.

The context of a generator, i.e. the variables within a generator will persist upon re-entry to the function.

**Syntax**
A generator function is created using the asterix, after the function keyword;
```
function* myGenerator() {
  // ...
}
```

A generator `function*` *does not* return a function, instead it returns a generator object.

```
const myGen = myGenerator();

console.log(myGen)

Object [Generator] {}
```