# White Space

Whitespace is any character without visual representation;

- Space - a single space character.
- Tabs - a series of space characters.
- Line Breaks - a single break which splits to a new line in the source.

JavaScript handles whitespace in the following ways when parsing application source code:

- Ignores space between tokens; the parser will discard any excessive whitespace which does not reside within a string value.

- Ignores line-breaks both inside and outside of string values, however automatic semicolon insertion is something to be considerate of.

## Formatting

We know that the JavaScript engine will strip excessive whitespace automatically, thus allowing us to use whitespace to better format our application source code.

### Good vs. Bad

More space in our application source can be a good thing for engineers; it can provide clean, more readable code, but more whitespace can also be bad thing.

#### Bad Formatting

The following snippet uses whitespace liberally, but not in a particularly useful way.

```
const   firstName     =    "David    "    ;

firstNames

// "David     "
```

Is equivalent to:

```
const firstName = "David    ";

firstNames

// "David     "
```

This use of excessive whitespace isn't something you will/should not find in professional applications.

--

#### Good Formatting

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

### Whitespace in String Literals

String literals will respect spaces

```
const spacey = "I    am    full   of      spaces";


// I    am    full   of      spaces
```

however strings cannot be easily broken across lines when regular single or double quotes surround the content

```
const breaky = "I  can't break
over two lines"


// Uncaught SyntaxError: Invalid or unexpected token
```

the parser will see the above as two separate statements, and semicolons will be inserted automatically;

```
const breaky = "I  can't break;
over two lines";
```
