What is it?
Scopes in JS are generated during the compilation/parsing phase of the program’s lifecycle;
the generation of scopes occur when the compiler looks through the source code and encounters formal bindings;
var, const, function

How it happens?
When our source code is being compiled the compiler sorts formal declarations\* into buckets - these buckets contain all the declarations that are declared in that particular part of the program - we have two main types of buckets;

Global Buckets - any formal declarations which live in the global environment are added to the global bucket; global scope

Function Buckets - any formal declarations which are present within a function body get added to the bucket for that particular function; local scope

—

Process
The following is the process undertaken by the compiler when it is generating scopes;

> Assess each line in the source code
> Check for formal variable or function declarations
> Place declarations into relevant scope

1. const foo = “bar” ++ add foo declaration to global bucket
2.
3.
4. function bar(foo) { ++ add bar declaration global bucket, ++ add foo to local bar bucket
5. foo = “baz”; // do nothing, not a formal
6. bam = “bam”; // do nothing, not a formal
7. }

The above snippet demonstrates how the compiler organises the scopes using the formal declarations it finds:

> LINE 1: Create binding in global scope for “foo” declaration
> LINE 4: Create binding in global scope for “bar” declaration \*\*\*
> LINE 4: Create binding in bar function scope for “foo” declaration

\*\*\* Function declaration’s declaration and value definition is handled at the compiler stage, opposed to variable declarations which are handle during the execution phase.

—

Breaking-up Statements
The compiler only cares about the identifier, so the value is not a concern, that is for the execution phase.

The following statement is split into two chunks; one for compilation, one for execution.
const foo = “bar"
Is handled like at compilation
const foo;
and
foo = “bar"
Is left for execution.

This process is what results in hoisting.

- formal declarations = a binding with a statement present, e.g. const or function
