# The `includes` Method

The `includes` method is an helper function which will return a `boolean` based on the presence/lack thereof of the value passed to the function.

### Numbers

If the array contains at least one member which a value matching that passed to the function, it will return `true`, else it will return `false`.

```
const numbers = [1, 2, 3, 4];

numbers.includes(3); // true

```

### Strings

If the array contains at least one member which a value matching that passed to the function, it will return `true`, else it will return `false`.

```
const strings = ["David", "Steffie", "Nole"];

strings.includes("Bob"); // false
```

### Objects

If the `includes` method is used on a composite value like an `object`, it will _always_ return `false`; objects are passed by reference, not value.

```
const users = [{ user: "David" }, { user: "Steffie" }, { user: "Nole" }];

users.includes({ user: "Steffie" }); // false

```
