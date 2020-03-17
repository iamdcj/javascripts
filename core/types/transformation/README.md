# Type Transformation

The process of type transformation is when one value type is converted to another value type, based on some operation, for example;

```
const a = 1 + '1';

console.log(a); // '11'
```

The above operation attempts to add the number `1` to a string containing the number `'1'`, this results in the JavaScript engine implicitly coercing the number one into a string, concatenating both operands to yield a string representation.

## Types of Transformations

There are two categories when it comes to transforming one value to another in JavaScript;

- [Coercion](./coercion) - this category of transformation is an automatic, implicit conversion of values based on some operation in a program.
- [Conversion](./conversion) - also known as 'type casting', can be an implicit, or explicit transformation of one value to another.
