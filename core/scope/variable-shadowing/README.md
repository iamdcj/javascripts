# Shadowing

Shadowing occurs when you declare a binding with an identifier, and then later declare another binding with the same identifier in a descendant scope.

You can shadow variables using `let`, `const` and `var` statements, however shadowing becomes more interesting when shadowing is implemented using `var` statements.

## Results of Shadowing

Shadowing variables prevents you from accessing bindings in parent scopes which have the same identifier, that is once a binding is declared with the same identifier as another variable in a parent lexical scope, you are unable to access its value.

```
function foo() {
var baz = "baz”;
    console.log(baz); // baz

    function bar() {
        var baz = “bazzer”;
        console.log(baz); // bazzer
    }

}
```

https://codepen.io/iamDCJ/pen/KLWpBP

There is no way for the `baz` binding in the foo scope to be accessed within the `bar`'s lexical environment; the binding has been shadowed.

Shadowing is thus a product of lexical scoping.

—

If you want to access a global variable in a part of a program where that binding has been shadowed,
you can access the global binding as a property of the global object;

```
var foo = "bar";

function test() {
    var foo = "baz" // no longer a way to access the global foo variable using lexical scope

    console.log(foo); // baz
    console.log(window.foo); // bar

}
test();
```

The above technique can only be achieved using `var`; you cannot access `let` or `const` declarations via the `window` object
