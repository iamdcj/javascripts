# Comments

Comments are part of all programming languages, and they are extremely useful when authoring code;
they allow programmers to add sensible annotations when writing their programs.

JavaScript supports two types of code comments:

### Single Line

The text between `//` and the line end are ignored by the javascript engine.

Example

```
// I am a valid comment
```

However the following will result in as syntax error:

```
// I am a valid comment
I should not be here

Log: Uncaught SyntaxError: Unexpected identifier
```

**Single line comments cannot break over two lines.**

--

### Multi-Line

The text between `/*` and `*/` will be ignored by the javascript engine.

```
/* I am a valid comment */
```

```
/*
I am a valid comment
*/
```

However the following will result in as syntax error.

```
/* I need to be closed

Log: Uncaught SyntaxError: Invalid or unexpected token
```

**Multi-line comments must be closed off**

```
/* I need to be closed */
```
