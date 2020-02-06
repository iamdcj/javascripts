# Avoid Side-Effects

A side-effect is anything that we **cannot safely predict**; something else in a function which is not simply returning a value, i.e. another thing in the program is affected.

The following are all side-effects:

**TIME-BASED DATA** - any data that can change based on a certain date/time.

The following function will never return the same output; **impure**

```
const returnDate = () => {
  const now = new Date();

  return now;
};
```

- **PRINTING TO SCREEN** - any function which prints to the screen, e.g. logging to console.
- **NETWORK REQUESTS** - any calls to an API / remote service
- **STATE MUTATIONS** - mutating state which is used in our programs, e.g. modifying an object.
- **USER INPUT** - anything that is determine by a user action, e.g. form controls.

All of the above have the potential to return different results; they are not predictable.

### Why should we avoid side-effects?

As stated above, side-effects are not predictable; there is always a chance that the function may return a different value, based on a side-effect being present in the function.

**Side-effects result in, non-deterministic, impure functions.**

---

#### References

- [What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
