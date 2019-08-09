# Getters and Setters
The `get` and `set` methods are functions which provide a cleaner API for retrieving and defining properties from/on classess.


### `get` accessor
This accessor function allows retrieval of data from an class using property syntax.

The `get` accessor does not take an parameters.

1. Create Person class
```
class Person {
  constructor() {
    this.givenName = "David";
    this.familyName = "Jones";
  }

  get fullName() {
    return `${this.givenName} ${this.familyName}`
  }
}
```

2. Retrieve full name of person using the getter accessor
```
console.log(Person.fullName);

// David Jones
```

---
### `set` accessor
This accessor function allows addition of data to an class using property syntax.

The `set` accessor takes one argument.

1. Create Person class
```
class Person {
  constructor() {
    this.givenName = "";
    this.familyName = "";
  }

  get fullName() {
    return `${this.givenName} ${this.familyName}`
  }

  set fullName(name) {
    const nameParts = name.split(' ');

    this.givenName = nameParts[0];
    this.familyName = nameParts[1];
  }
}
```

2. Define person names using the setter accessor
```

Person.fullName = 'Nole Jones';
console.log(Person.givenName);
console.log(Person.familyName);
// Nole Jones
```

---
#### References
[Get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
[Set](ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)