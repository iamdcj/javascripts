# Lexical Scope

Lexical Scope is the scoping model used by JavaScript; it determines the scope of a program based on how the program’s source is structured.

### How it works
During compilation there is a ‘lexing’ phase which analyses the source code -
this lexing phase takes the following steps to determine lexical scope;

1. __Analyses source__ - traverses the different parts of the program.
2. __Generates scopes__ - for each function or block it encounters a new lexical environment(ccope)) is created.

Once the engine knows where bindings live in the source code, it can them determine how to/if it can retrieve a binding based on where the program is currently executing.

---

#### Predictability
The source code is the source of truth for lexical scope; the programmer generates the scopes, which are then 'fixed' at compile time.

> A lookup will always return the value stated in the source code because the relationship between the reference and the binding is fixed at compile time. - K. Simpson


```
const a = “A”;

function globalFunction() {
    const b = “B”;

    function localFunction(c) {
        console.log(a, b, c)
    }

    localFunction(“C");
}

globalFunction(); // A B C
```

* Bindings `a` and `globalFunction` are part of the global scope.
* `localFunction` is part of the globalFunction scope.
* Parameter `c` is part of the localFunction scope. 

We write the program this way, and the engine cemements the rules, thus forming the lexical scope.


#### Binding Look-ups
The engine knows how to lookup bindings based on where we placed our bindings in the source code, see: running scoped code

Bindings can be retrieved if they live in the current executing function’s lexical environment; parent scopes.

The engine will being the look-ups in the innermost executing scope, working its way up the chain until it retrieves the target binding(based on identifier); once the engine retrieves the binding, it stops the search - first come, first serve.

```
function lexMe() {
    const b = “local ting”;

    function innerScope() {
        
        function innerInnerScope() {
            console.log(b)
        }

        innerInnerScope();
    }
    innerScope();
}

lexMe() // local ting
```

In the above example the engine will perform a RHS lookup for variable `b`.

1. It first checks the current lexical environment(`innerInnerScope`) for the binding; ~~not found~~
2. It then jumps-up to the initial ancestor lexical environment(`innerInnerScope`) to retrieve the binding; ~~not found~~
3. It then jumps-up another level to the `lexMe` lexical environment to retrieve `b`; **found**



---
##### Resources
[astronautweb](http://astronautweb.co/javascript-lexical-scope/)
