# Avoid Shared State

Shared state is any bindings that are accessible by different scopes within an application.

- **GLOBAL SCOPE** - global scope can be accessed/shared across any part of a program.
- **LEXICAL SCOPES** - lexical scopes are any of the current functions parent scopes.

## Why should we avoid it?

If our functions modify a shared binding, we cannot be sure how that affects other parts of our programs; we would need to know the entire history of the bindings to be sure of the changes you are making, and how they might affect the application.

The following examples demonstrate why sharing state can be problematic:

### Race Condition

This example consists of a shared object, which is mutated by two different functions, at two different times.

```
const user = {
  name: "David",
  age: 31,
  role: "Script Monkey"
}

const updateName = name => user.name = name

const updateUser = (name, age, role) => {

    setTimeout(() => {
        user.name = name;
        user.age = age;
        user.role = role;
    }, 5000);

}

updateUser("DCJ", 32, "FED");
updateName("David Jones");
```

#### Flow

**1.** updateUser is called to update user properties.
**2.** updateName is called to modify the current user’s name.
**3.** User’s name gets updated from updateName()
**4.** updateUser returns after updateName(), wiping-out the name provided in updateName

This is a primitive example, but highlights what can happen when updating shared state at different points.

**You can’t guarantee the current state if it is mutated, and mutated in different places.**

### Call Order

We know from the above example what happens to shared state if functions don’t return in a rigid order, thus functions which affect shared state need to always be called in the same order, otherwise the results will not be the same.

This example demonstrates what happens if shared state affecting functions are not called in the same order every time;

#### State

```
const user = { points: 1 }
```

#### Functions

```
const doublePoints = () => user.points \*= 2;
const addPoint = name => user.points += 1;
```

#### Invocations

```
doublePoints()
addPoint()

console.log(user.points) // 4

addPoint()
doublePoints()

console.log(user.points) // 3
```

The above behaviour might be intended, but it demonstrates that if you call a function which affects shared state in different orders, you will not get consistent results, which is against the core concepts of functional programming.

If you avoid using shared state, then the order of functions does not matter, nor does the timing of return. **If you have are working with shared state, and need to use the state in your functions, do not mutate the original data.**
