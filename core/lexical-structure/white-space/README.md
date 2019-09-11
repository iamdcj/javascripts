# White Space

JavaScript handles whitespace in the following ways:

- Ignores space between tokens; the parser will discard any excessive whitespace.
- Ignores line-breaks, however automatic semicolon insertion is something to be considerate of.

### Bad Formatting

The following example demonstrates how the JavaScript engine strips any excessive whitespace automatically, allowing for non-dangerous use of liberal whitespace in the source code…in a bad way:

```
const   firstName     =    “David    “    ;

firstNames

"David     "
```

Is equivalent to:

```
const firstName = “David    “;

firstNames

"David     "
```

THIS IS AN EXAMPLE OF HOW NOT TO USE EXCESSIVE WHITESPACE

--

### Good Formatting

The following example demonstrates how the JavaScript engine strips any excessive whitespace automatically, allowing for non-dangerous use of liberal whitespace in the source code…in a good way:

The following control statements are both perfectly valid javascript code:

(Inconsiderate)

```
if(1 === 1) { console.log(true) } else { console.log(false) }

// true
```

(Considerate)

```
if(1 === 1) {
  console.log(true)
} else {
  console.log(false)
}

//true
```

The first example is not really considerate to any readers of the source code, and will likely irk any programmers debugging/navigating the code.

The second example is much cleaner, and demonstrates how you can use liberal whitespace to improve formatting of source code, without any worry of errors.
