# Lexical Scope

Lexical Scope is the scoping model used by JavaScript; it determines the scope of a program based on how the program’s source code is structured.

### Lexing

During compilation there is a ‘lexing’ phase which analyses the source code the author has written -
the engine's lexer takes the following steps to determine lexical scope of the program;

1. **Analyses source** - traverses the different parts of the program.
2. **Generates scopes** -
   1. generates global lexical environment.
   2. for each function or block it encounters a new local lexical environment(scope) is created.

---

#### Predictability

The source code is the source of truth for lexical scope; the programmer generates the scopes, which are then 'fixed' at compile time, thus providing the programmer(s) with a predictable set of rules for binding resolution;
**if you wrote the code, you likely know where things live**

> A lookup will always return the value stated in the source code because the relationship between the reference and the binding is fixed at compile time. - K. Simpson

##### Building the Scopes

The following snippet illustrates how the source code structure determines the scopes in a program;

```
// GLOBAL SCOPE
const a = “A”;

function globalFunction() {
    // LOCAL SCOPE
    const b = “B”;

    function localFunction(c) {
        // LOCAL SCOPE
        console.log(a, b, c)
    }

    localFunction(“C");
}

globalFunction(); // A B C
```

- Bindings `a` and `globalFunction` are part of the global scope.
- `localFunction` is part of the globalFunction scope.
- Parameter `c` is part of the localFunction scope.

#### Running the Scopes

Once the scopes have been 'cemented' during the lexing phase, the execution phase can begin to work with the scopes the lexer created; _**the execution engine can safely look-up bindings based on where we placed them in the source code**_.

The engine will begin the look-ups in the innermost scope, working its way up the collection of ancestor scopes(scope chain) until it retrieves the target binding(based on identifier); _**once the engine retrieves the binding from one of the available scopes, it stops the search**_.

```
function lexMe() {
    const b = “local ting”;

    function innerScope() {
        // b doesn't live here
        function innerInnerScope() {
            // b doesn't live here
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

--

### **TL;DR 👆**

Lexical Scope is a result of how programmers structure their JS code; the nesting functions/blocks designs the lexical scope, which is cemented at 'compile' time.

It is the lexical scope which determines which bindings can be accessed in a certain part of a program.

---

##### Resources

[astronautweb](http://astronautweb.co/javascript-lexical-scope/)
