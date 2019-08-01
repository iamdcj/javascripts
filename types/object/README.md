# Objects

### `typeof` object

Objects are an unordered(not indexed) collection of properties(members). These properties can be a set of data(usually related), optionally accompanied by methods(functions attached to an object).

```
const Person = {
  name: "David"
  surname: "Jones",
  logFullName(): {
    console.log(`${this.name} ${this.surname`)
  }
}
```

The above object is made-up of three members, two of which contain related data, and a third member which contains a function(method).

*Objects can contain any valid JS datatype as a member value*

