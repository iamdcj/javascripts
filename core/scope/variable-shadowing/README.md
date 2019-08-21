What is shadowing?
It is when you declare a binding with an identifier, and then later declare another binding with the same identifier in a descendant scope.

What does it do?
Shadowing bindings prevents you from accessing bindings in parent scopes which have the same identifier;

This example demonstrates how to perform shadowing:
function foo() {
const baz = "baz”;  
 console.log(baz); // baz

    function bar() {
        const baz = “bazzer”;
        console.log(baz); // bazzer
        // at this level there is no way to access the baz in the parent foo scope.
    }

}
https://codepen.io/iamDCJ/pen/KLWpBP

There is no way for the ‘baz’ binding in the foo scope to be accessed in the bar scope; the binding has been shadowed.

This is a product of lexical scoping.

—

If you want to access a global variable in a part of a program where that binding has been shadowed,
you can access the global binding as a property of the global object;

const foo = “bar”;

function test() {
const foo = “baz” // no longer a way to access the global foo variable using lexical scope

    console.log(foo); // baz
    console.log(window.foo); // bar

}
