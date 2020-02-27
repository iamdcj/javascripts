# Comparison Operators

Comparison operators allow engineers to comparison operands based on their type and/or their value.

Comparisons are usually ran to determine control flow in an application.

```
if(1 === 2) {
  ...do this
} else {
  ...do that
}
```

JavaScript has the following mechanisms in place when an engineer wants to compare values in a program;

- **Strict equality** - this compares both a value and the type
- **Loose equality** - this compares the value, but not the type(kinda).

### **Strict Equality**

The Strict equality operator is there to compare values which have the same type; if the type differs then it will return `false`. It does not concern itself with type coercion.

The `===` operator compares both the value type, e.g. a number, and the value itself. In that order.

This comparison `1 === 2` is an example of a strict comparison which would return `false`; the types are the same, but the values differ, however `'1' === 2` would return `false` because the types are different.

---

##### Resources

- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [Loose vs. Strict](https://medium.com/@tonero91/making-sense-of-javascript-loose-vs-strict-equality-7675b2b90b3c)
