# Objects

### `typeof` object

Objects are an unordered(not indexed) collection of properties(members). 

These properties are usually related pieces of data, for example;
```
const Person = {
  name: "David"
  surname: "Jones",
  logFullName(): {
    console.log(`${this.name} ${this.surname`)
  }
}
```

The above object is made-up of three members; two of which contain related data, and a third member which contains a function which logs information from within the object.

*Objects can contain any valid JS datatype as a member value*

#### Methods
An object method is a function with is stored as the value for a property on the object;

```
const DavidJones = {
	name: "David Jones",
	logName() {
		console.log(this.name);
	}
}
DavidJones.logName(); // David Jones
```

Methods are automatically bound to the object itself, i.e. the `this` keyword will point to the wrapping object(context), allowing for direct access to the wrapping object's other members.



