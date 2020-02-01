# Pure Functions

Pure Functions are the key to functional programming.

The following sections detail the characteristics of a Pure Function.

### Predictable and Deterministic

Pure Functions are only concerned with returning a value, and if you provide a pure function with the same input, the return value will always be the same

### Side Effects

Pure functions do not deal with side-effects, they should not be concerned with any of the following;

- **NETWORK** - No calls to a remote API.
- **TIME** - does not deal with time.
- **PRINTING** - does not write to the screen in any for, e.g.g no logging.
- **MUTATIONS** - does not mutate data/state.
- **USER INPUT** - it does not deal with user input, e.g. form data.

### Versatile

Due to their simplicity, pure functions can easily be;

- Reused across different programs.
- Maintained and refactored.

### Examples

The following examples demonstrate how pure functions work;

#### Double

This example takes a number, doubles it, and returns the value:

```
const double = int => int * 2;

double(2);

// 4
```

#### Addition

This example takes two numbers as arguments, adds them, and returns the value;
This example takes a number, doubles it, and returns the value:

```
const adder = (x, y) => x + y;

adder(1, 1);

// 2
```

The above examples are concise, deterministic(no side-effects) and can be utilised in a number of places.
