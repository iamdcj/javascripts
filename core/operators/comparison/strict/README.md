# Strict Comparisons

Strict comparisons expect both the type and the value to be the same, else the engine will return `false`.

#### [Comparison Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6)

The following is a breakdown of how JavaScript handles strict comparisons;

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

### Strict Equality

The Strict equality operator is there to compare values which have the same **type**; if the type differs then it will return `false`. _It does not concern itself with type coercion._

This comparison `1 === 1` is an example of a strict equality comparison which would return `true`; the types are the same, ditto the values, however `'1' === 1` would return `false` because the types are different.

### Strict Inequality

Essentially the strict equality 👆in reverse; if a value is the same type and same value, it will return `false`, if they differ in type and/or value it will return `true`.

This comparison `1 !== 1` is an example of a strict inequality comparison which would return `false`; the types and the values are the same, however `'1' !== 1` would return `true` because the types are different.
