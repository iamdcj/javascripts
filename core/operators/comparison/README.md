# Comparison Operators

Comparison operators allow engineers to comparison operands based on their type and/or their value. If the comparison is true, the engine will return `true`, else it will return `false`.

Comparisons are usually ran to determine control flow in an application, for example;

```
if(1 === 2) {
  ...do this
} else {
  ...do that
}
```

JavaScript has the following mechanisms in place when an engineer wants to compare values in a program;

- **Strict equality** - this compares both the **type**, and then the **values**(in that order)
- **Loose equality** - this compares the **value**, but not the type(kinda).

### **Strict Equality**

The Strict equality operator is there to compare values which have the same **type**; if the type differs then it will return `false`. _It does not concern itself with type coercion._

#### [Comparison Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6)

- IF either operands have different types; `return false`, e.g. `1 === {}`
- IF the operands are the same type, assess values;
  - IF operand values are `undefined`; `return true`
  - IF operand values are `null`; `return true`
  - IF operand values are `number`;
    - IF operand values are `NaN`; `return false`
    - IF operand values are the same number; `return true`
    - IF operand values are -0 and +0; `return true`
    - IF operand values are `Infinity`; `return true`
    - IF operand values are `-Infinity`; `return true`
  - IF values are `string`;
    - IF operand values aren't the exact same string, i.e. differing chars. or order; `return false`
    - IF operand values are the exact same string, i.e. same chars. in the same order; `return true`
  - IF values are `boolean`s
    - IF both operand values are not both `true`, or both `false`; `return false`
    - IF both operand values are `false`; `return true`
    - IF both operand values are `false`; `return true`
  - IF values are `object`s
    - IF both operands don't refer to the same object; `return false`
    - IF both operands do refer to the same object; `return true`

This comparison `1 === 2` is an example of a strict comparison which would return `false`; the types are the same, but the values differ, however `'1' === 2` would return `false` because the types are different.

---

##### Resources

- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [Loose vs. Strict](https://medium.com/@tonero91/making-sense-of-javascript-loose-vs-strict-equality-7675b2b90b3c)
