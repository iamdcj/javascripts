# Type Coercion

Type coercion is an automatic, implicit transformation of values based on some operation in a program, for example:

```
const a = 1 + '1';

console.log(a); // '11'
```

The above operation attempts to add the number `1` to a string containing the number `'1'`, this results in the JavaScript engine implicitly transforming the number one into a string respresentation as per the right-hand operand, the end result is a concatenation of both operands, yielding the `'11'` string.

## Rules of Type Coercion

The rules of coercion determines how and when a type is transformed from one to another, knowing these rules can be very useful to an engineer.

#### Operations

**Number to String**
If one operand is a number, and any other operand is a string the `+` operator will _always_ return a string representation of the operation;

```
4 + '2' // '42' (str)
'4' + 2 // '42' (str)
9 + 10 + 11 + '1' // '301' (str)
'9' + 0 + 2 + 10  // '902010' (str)
```

#### Comparisons

If we use the [abstract/loose](../../../operators/abstract) comparison operator, type coercion becomes a possibility, dependant on the operands at play;

```
4 + '2' // '42' (str)
'4' + 2 // '42' (str)
9 + 10 + 11 + '1' // '301' (str)
'9' + 0 + 2 + 10  // '902010' (str)
```
