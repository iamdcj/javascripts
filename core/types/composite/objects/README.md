# Objects

### `typeof` object

Objects are an unordered collection of members; `property:value` pairs - the properties are labels which allow for easy reference to the values; which can be any valid type.

The property values are usually pieces of related data, accompanied by functions(methods) which perform a specific task on the related data.

_Objects can contain any valid JS datatype as a property value._

#### Anatomy

An `object` consists of the following parts;

- **Namespace** - Label for the object literal.
- **Braces** - Braces which **encapsulate** the data within.
- **Members** - Collection of `property:value` pairs.

```
const Person // Label = { // Braces
  name: "David" // Member; property - value pair
  surname: "Jones",
  logFullName(): {
    console.log(`${this.name} ${this.surname`)
  }
}
```

The above `object` is encapsulates three members; two of which contain related data, and a third member which contains a function which logs information from within the object, functions stored as values of properties are known as **methods**.

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

#### Benefits of Encapsulation

Storing values in a common wrapper makes more sense than a bunch of separately initialised bindings, especially when there is a relationship; by encapsulating values within object 'buckets', bindings have a clear relationship, cemented by the object namespace, as a result these bindings are shielded from potential namespace collisions.

```
const DavidsGivenName = "David";
const DavidsFamilyName = "Jones";
const DavidsAge = 32;
```

**vs.**

```
const David = {
  givenName: "David",
  familyName: "Jones",
  age: 32
}
```

#### **Defining Members**

Adding members to an object literal during the initial creation can be achieved by stating the `property`, followed by the value, separated by a colom`:`;

```
const objLit = {
  prop: "value",
  anotherProp: ["another", "value"]
}
```

Further properties can be added to objects by using dot notation, or bracket notation on the objects namespace `objLit`;

```
objLit.proppyWoppy = 19;

objLit["testProp"] = null;

objLit["logger"] = function() { console.log(this.prop) };

console.log(objLit);

// { prop: "value", anotherProp: Array(2), test: "another", proppyWoppy: 19, testProp: null, logger: ƒ} }
```

Using bracket notation allows for dynamic member addition, i.e. you can use a string value to define the member name, followed by whatever value;

```
const addMember = (obj, label, value) => {
  obj[label] = value;
}

addMember(objLit, name, "David");

console.log(objLit)

// {prop: "value", anotherProp: Array(2), proppyWoppy: 19, testProp: null, "": "David"}
```

#### **Accessing Members**

Accessing object properties or methods can be done using dot or bracket notation;

**Dot Notation accessing**
Dot notation is the most common way of accessing object members;

```
const User = {
  id: 1234,
  age: 32,
  name: "David Jones",
  logUserInfo() {
    console.log(
      `
      ID: ${this.id}
      Age: ${this.age}
      Name: ${this.name}
      `
    )
  }
}

console.log(User.id); // 1234

User.logUserInfo();
//  ID: 1234
//  Age: 32
//  Name: David Jones
```

**Bracket Notation accessing**
Dot notation offers another approach to member accessing; it is very similar to the array member accessing syntax `array[0]`, however the string label is using instead of the ordinal index; object are not sorted numerically.

```
const User = {
  id: 1234,
  age: 32,
  name: "David Jones",
  logUserInfo() {
    console.log(
      `
      ID: ${this.id}
      Age: ${this.age}
      Name: ${this.name}
      `
    )
  }
}

console.log(User['name']); // David Jones

User['logUserInfo']();
//  ID: 1234
//  Age: 32
//  Name: David Jones
```

Accessing methods using bracket notation is not a common thing, and dot notation is highly recommended.

Dot notation is useful when accessing a property which contains hyphens;

1. Add 'date-of-birth' member:

```
User['date-of-birth'] = '05/13/87';
```

2. Attempt access using dot notation (throws error);

```
User.date-of-birth;
// Uncaught ReferenceError: of is not defined
```

3. Use bracket notation to successfully retrieve value;

```
User['date-of-birth']
// 05/13/87
```
