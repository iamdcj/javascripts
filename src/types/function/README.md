# Functions

### `typeof` function

Functions are reusable pieces of executable code; they perform a specific task, and can return a value once complete.

```
function returnFullName(givenName, familyName) {
  return `${givenName} ${familyName}`
}

const fullName = returnFullName("David", "Jones");
```

Functions are technically subtypes of objects, despite what `typeof aFunc()` may return. Functions are callable objects, they can possess properties, and they have a length property.
