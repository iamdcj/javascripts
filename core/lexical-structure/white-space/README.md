# White Space

Whitespace is any character without visual representation;

- **Space** - a single space character.
- **Tabs** - a series of space characters.
- **Line Breaks** - a single break which splits to a new line in the source.

JavaScript handles whitespace in the following ways when parsing application source code:

#### Ignores Space

The parser will discard any excessive whitespace between tokens which do not reside within a string value.

#### Ignores Line-breaks

The parser will ignore any line-breaks outside of strings, and if the correct syntax/delimiters aren't used, whitespace will be ignored within strings also.

**_Automatic Semicolon Snsertion is something to be wary of when breaking code over new lines_.**

## Formatting

JavaScript engine will strip excessive whitespace automatically, thus providing engineers with a relatively safe way to use whitespace to better format our application source code.

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

#### Spaces

String literals will respect spaces

```
const spacey = "I    am    full   of      spaces";


// I    am    full   of      spaces
```

#### Line-breaks

Strings cannot be easily broken across lines when regular single or double quotes surround the content

```
const breaky = "I  can't break
over two lines"
// Uncaught SyntaxError: Invalid or unexpected token
```

If line-breaks are required within a string, there are a number of valid ways to achieve them;

#### Template Literals

If the supported platforms adhere to the `ES2015` standard then template literals provide the best way to handle strings containing line breaks;

```

const mlStr = `
I
am
a
multiline
string`

```

#### Backslash

If the executing platforms do not support template literals, and transpiling isn't an option, then the following approach is the friendliest way to handle strings containing line-breaks;

```

var mlStr = " I \
 am \
 a \
 multiline \
 string \
"

```

#### Concatenation

If the executing platforms do not support template literals, and transpiling isn't an option, then string concatenation is another option for strings containing line breaks;

```

var mlStr = "I" +
"am" +
"a" +
"multiline" +
"string"

```

**This approach is doing more work than necessary.**
