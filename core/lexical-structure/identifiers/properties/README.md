# Identifier Rules: Object Propeties
Object properties can be set with one of the following:

### Unquoted Identifiers
Object keys can be set using an unquoted identifier when the identifier respects the following rules;

Initial character is one of the following:
- **Number** (`0-9`)
- **Letter** (`a - z`)
- **Underscore** (`_`)
- **Dollar** (`$`)

Subsequent characters is any of the following:
- **Number** (`0-9`)
- **Letter** (`a - z`)
- **Underscore** (`_`)
- **Dollar** (`$`)

These rules are very similar to regular variable [identifier rules](../variable-functions), with the addition of numbers. 

```
const obj = {
  foo: "bar",
  $: "baz",
  _: "ham"
}

console.log(obj.foo); // bar
console.log(obj.$); // baz
console.log(obj._); // ham
```

#### Numbers
Numbers **must be retrieved using bracket(`[]`) syntax**. 

```
const numObj = {
  1: "foo"
}

console.log(obj['1']); // foo
```

It is highly recommended not to use numbers as property identifiers.


#### Reserved Words
***Object properties are not restricted from using reserved words, but it is advised against.***

```
const reservedObj = {
  if: "foo",
  let: "bar",
  do: "baz"
}

console.log(reservedObj.if) // foo
console.log(reservedObj.let) // bar
console.log(reservedObj.do) // baz
```


### Quoted Identifiers
Object keys can be set using an quoted identifier when the identifier does not respect the above rules, e.g. the identifier contains a space or maybe more likely an hyphen(`-`);

```
const testObj2 = {
  "ham-eggs": "foo",
  "ham eggs": "bar"
}
```

Quoted identifiers can only be retrieved using bracket(`[]`) syntax.

```
console.log(testObj2['ham-eggs']) // foo
console.log(testObj2['ham eggs']) // bar
```

---
#### Resources

[Properties](https://mathiasbynens.be/notes/javascript-properties)
[Property Validator](https://mothereff.in/js-properties)

