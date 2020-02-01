# Avoid State Mutations

We mutate when our functions work with composite data types(objects, arrays) directly, i.e. we do not create a new copy of the data, but we reference it directly; composites are passed by reference, thus working on the reference, will update the original.

Why should they be avoided?
By avoiding state mutations, we will get consistent and predictable results in our functions; the same input will yield the same output because we don’t change the original data, we use a true copy of it instead.

If we modify state, we no longer have predictable data to work with, and our functions are no longer pure.

Ideally the objects and arrays we create would be immutable upon generation, however without a library to help us, the best we can do is ensure we do not modify the original objects/arrays in our functions.

—

EXAMPLE
This example uses the state to generate values in an immutable fashion; the originals are never modified.

STATE
const user = {
age: 31
}

FUNCTIONS
These functions use the user object to perform a calculation, how the return values have no impact on the original state
const doubleUserAge = user => ({...user, age: user.age \* 2})
const incrementUserAge = user => ({...user, age: user.age + 1})

This guarantees the same results, irrespective of the call order;

INVOCATION 1
doubleUserAge(user)
// 62

incrementUserAge(user)
// 32

INVOCATION 2
incrementUserAge()
// 32

doubleUserAge()
// 62

The above demonstrates how to work with references types, without modifying the original.
