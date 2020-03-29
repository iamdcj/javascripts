# Type Transformation

The process of type transformation is when one value type is converted to another value type, based on some operation, for example;

```
const a = 1 + '1';

console.log(a); // '11'
```

The above operation attempts to add the number `1` to a string containing the number `'1'`, this results in the JavaScript engine implicitly coercing the number one into a string, concatenating both operands to yield a string representation.

## Types of Transformations

The JavaScript language supports the following types of type transformations;

- **to string** - this transformation will attempt convert a non-string value to a string representation of that value `1 + '1'`
- **to boolean** - this transformation will attempt convert a non-boolean value to a boolean representation of that value `1 == true`
- **to number** - - this transformation will attempt convert a non-numeric value to a number representation of that value `1 - '1'`

## Categories of Transformations

There are two categories when it comes to transforming one value to another in JavaScript

- [Coercion](./coercion) - this category of transformation is an automatic, implicit conversion of values based on some operation in a program.
- [Conversion](./conversion) - also known as 'type casting', can be an implicit, or explicit transformation of one value to another.

These behave in very similar ways, but coercion is always _implicit_, whereas conversion/casting can be _implicit_. or _explicit_.

---

#### Resources

- [Alexey Samoshkin - JavaScript type coercion explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
- [Aquil Hussain - Typecasting and Coercion in JavaScript](https://medium.com/swlh/typecasting-and-coercion-in-javascript-f0d59b0a86db)
