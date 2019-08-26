# Scope Generation

Scopes in JS are generated during the compilation/parsing phase of the program’s lifecycle.

The generation of scopes occurs when the compiler looks through the source code and encounters formal declarations; bindings which have one following statements before the variable identifier: `var`, `const`, `let`, and `function`.

_Informal declarations, bindings without a statement, are left for the execution phase_.

{
name = "David";
}

The above will be overlooked by the compiler, and left for execution.

## Process

When our source code is being compiled the compiler sorts formal declarations into buckets, these buckets are known as `lexical environments` - these buckets contain all the declarations that are declared in that particular part of the program.

There are three main types of buckets;

#### Global Buckets

Any formal declarations which live in the global environment are added to the global lexical environment - this is known as the **global scope**.

#### Function Buckets

Any formal declarations which are present within a function body get added to the bucket for that particular function - this is known as **function scope**.

The following is an high-level overview of the process undertaken by the compiler when it is generating scopes;

#### Block Buckets

Any formal `const` or `let` declarations present in a block(`{}`) will get added to the bucket for that particular block - this is known as **block scope**.

The following is an high-level overview of the process undertaken by the compiler when it is generating scopes;

1. Assess each line in the source code

   1. Check for formal variable or function declarations
   2. Place declarations into relevant scope

```
const foo = “bar” // add foo declaration to global bucket

function bar(foo) { // add bar declaration global bucket,
  // add foo to local bar bucket
  foo = “baz”; // do nothing, not a formal declaration
  bam = “bam”; // do nothing, not a formal declaration
}
```

The above snippet demonstrates how the compiler organises the scopes using the formal declarations it finds:

1. LINE 1: Create binding in global scope for `foo` declaration
2. LINE 4: Create binding in global scope for `bar` declaration
3. LINE 4: Create binding in bar function scope for `foo` declaration

A Function's declaration and value definition is handled at the compiler stage, opposed to variable declarations which are handle during the execution phase,

—

#### Breaking-up Statements

The compiling phase only considers a variable's identifier, the value initialisation is an execution phase concern - variables are `undefined` until executuion, see [hoisting](../hoisiting).

The following statement is split into two 'chunks';

- one chunk for **compilation**.
- one chunk for **execution**.

```
const foo = “bar"
```

The engine handles the above declaration as follows;

##### Chunk 1 - Compilation

```
const foo;
```

##### Chunk 2 - Execution

```
foo = “bar"
```

This process is what results in [hoisting](../hoisting); the compiler assesses formal declarations, moving them to the top of their lexical environmemnt, but leaves the initialization for the execution phase.
