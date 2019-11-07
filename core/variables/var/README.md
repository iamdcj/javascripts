# Var

The `var` statement is used to declare bindings in a program.

`const` declarations are not affected by the [`temporal dead zone`](../temporal-dead-zone) - instead they are hoisted to the top of their respective lexical environment, and set with a value of `undefined` until execution occurs.

See [Hoisting](../../scope/hoisting).

## **Reassignment and Redeclaration**

### **Reassignment**

Any variable declared using the `var` keyword can be reassigned, i.e. its value/type can be changed from the originally initalised value or type.

```
var foo = "bar"

foo = 1987;

foo = false;
```

### Redeclaration

Variables declared with `var` can be declared multiple times within the same lexical environment.

```
var foo = "bar";

var foo = "baz";

var foo = "qux";

console.log(foo); // qux
```

This differs to both `const` and `let` statements; _any variable declared using either of these statements can only be declared once in a lexical environment_

There is good reason why `const` and `let` don't allow for the above; it isn't a good idea.

#### Shadowing

Shadowing occurs when you declare a binding with an identifier, and then later declare another binding with the same identifier in a descendant scope.

You can shadow variables using `let`, `const` and `var` statements, however shadowing becomes more interesting when shadowing is implemented using `var` statements.

[Variable Shadowing](core/scope/variable-shadowing)
