# Comparison Operators

Comparison operators allow engineers to compare operands based on their type and/or their value. If the comparison runs true, the engine will return `true`, else it will return `false`.

Comparisons are usually ran to determine control flow in an application, for example;

```
if(1 === 2) {
  ...do this
} else {
  ...do that
}
```

JavaScript has the following mechanisms in place when an engineer wants to compare values in a program;

- [**Strict equality**](strict) - this compares both the **type**, and then the **values**(in that order)
- **Abstract equality** - this compares the **value**, but not the type(kinda).

---

##### Resources

- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [Loose vs. Strict](https://medium.com/@tonero91/making-sense-of-javascript-loose-vs-strict-equality-7675b2b90b3c)
