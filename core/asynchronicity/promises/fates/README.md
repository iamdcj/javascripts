# The Fates of a `Promise`

Every promise has two potential fates; `resolved` or `unresolved`

### **Resolved**

Any promise that isn't in the `pending` state, and has settled, i.e. it is `fulfilled` or `rejected`.

### **Unresolved**

If a promise hasn't been settled, and thus is not `fulfilled` or `rejected`, but is instead still in the `pending` state.

---

##### Resources

- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
