What is it?
Scoped code is the code which was sorted into scopes during the scope generation phase; when all the lexical environments have been created;

The engine does not bother with formal declarations, they have been taken care of during the generation phase.

Nested Scopes
The compilation phase creates the buckets of declarations(lexical environments), and each time a function is encountered, a new scope is created, thus creating what is known as scope chain; a look-up chain which contains the variables for each scope present in the chain.

If we nest functions inside other functions the scope chain grows larger, adding each scope to the chain.

When we attempt a look-up for LHS or RHS, we start looking in the current scope, if what we need cannot be found,
we traverse up the chain until we either find what we require, or we get a reference error\*, see lexical scope

Process; Looking-up Bindings
The following details the process when the engine executes the scoped code;

> Assess each line in the source code
> Check executing scope for the presence of an encountered LHS or RHS

       LHS (assignment)
            > Lookup LHS in scope in order to resolve a target for the value
                > IF exists; assign value to LHS target
                > ELSE; look in parent scopes for LHS
                        - STRICT: throw referenceError if never found
                        - SLOPPY: create global variable using LHS and assign value if LHS does not exist in parent scopes.
        RHS (retrieval)
              > Lookup RHS in scope in order to retrieve value
                > IF exists; perform action
                > ELSE; look in parent scopes for LHS
                        - Failure: throw referenceError if never found
                        - Success: perform action

LHS Lookups
When the engine performs LHS look-ups, the intention is to assign values to the declaration; initialise the binding

1. const foo = “bar” \*\*check if LHS foo exists in global scope, it does, initialise with value
2.
3. function bar(foo) {
4. foo = “baz”; \*\*check if LHS baz exists in function scope, it does, initialise with value
5. bam = “bam”; \*\*check if foo exists in function scope, it doesn't
6. }

The above snippet handles the the initialisation of bindings during the execution phase;

> LINE 1 - assign value to target foo present in global scope
> LINE 4 - assign value to target foo present in global scope
> LINE 5 - cannot find target in current scope, nor parent scope

—

RHS Lookups
When the engine performs a RHS look-up, the intention is to retrieve the value of the binding.
1 function foo(a) {
2 console.log( a + b );
3 b = a;
4 }
5
6 foo( 2 );

The above snippet contains a number of RHS look-ups;

> LINE 1 - var c = foo( 2 ); - retrieves the function foo
> var b = b; - retrieves the value of b
> return a + b - retrieves both a and b

NOTES
LHS ~ Source target :: assignment
RHS ~ Source value :: retrieval

- if not in strict mode, and we are performing a LHS, any time we cannot resolve the look-up a global variable is declared.
