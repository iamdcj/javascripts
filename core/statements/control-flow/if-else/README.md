# if...else

The `if` statement provides a control structure which will execute a particular statement/set of statements based on the given conditions.

`if this -> do that`

---

### `if` with `else`

The `if` statement is commonally used alongside the `else` statement, providing two clauses in the control structure; providing two different avenues for the program to go down.

`if` the condition is truthy, then run the statement(s) within the `if` clause.
`else` run the statement/set of statements within the `else` clause.

The following snippet will result in `false` being returned

```
// condition is false
// falls into else clause
if(1 > 2) { 
  return true;
} else {
  return false;
}
```

The given condition will resolve as `false`, and the execution will continue within the `else` clause.

### `if` without `else`

The `if` statement can, and often is, used without an `else` clause, most commonly to stop execution of/return from a particular method.

```

function grantAccess(name) {
  if(name === 'David') {
    return;
  }

  return `${name}, you are welcome`
}

grantAccess('David'); // undefined
grantAccess('John'); // 'John, you are welcome`

```

The engine will not execute any code following the `if` control structure, _IF_ the condition is truthy; it will fall into the `if` clause and execute the `return` statement, thus 'exiting' from the function.

### `if`...`else if`...`else`

### Mutiple statements within a clause
