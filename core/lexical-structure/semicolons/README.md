# Semicolons

Semicolons signify the end of a statement in JavaScript, that is they are used so provide separation between the end of one statement, and the start of another.

```
const statement1 = "foo";
const statement2 = "bar";
const statement3 = function() { console.log(statement1, statement2) };
```

### Optional Semicolons

Adding Semicolons isn't a requirement when authoring JavaScript applications, broadly speaking;

**If each statement lives on its own line, then there isn't a requirement for it to be completed with a semicolon.**

Some developers always omit semicolons in their source, others, like myself, strive to code with semicolons present.

```
const test = "David"
import ( x ) from './y'
```

**None of the above statements require finishing-off with a semicolon.**

If there are two or more statements on the same line, then semicolons are required to signify the end of each statement, _aside from the last statement on the line_.

```
const foo = "bar"; const bar = "baz"; const ham = "eggs"
```

There reason semicolons can be omitted in certain situations is due to the ASI mechanism built into the parsing engine.

If you use semicolons, or you don't, understanding how ASI works is still a requirement when engineering JavaScript programs.

### Automatic Semicolon Insertion

ASI is essentially a set of rules which determine when a semicolon will/will not be automatically placed into a part of the application during the parsing phase.

The rules of ASI:

- After line-break, unless followed by () or []
- End of program/file
- NOT after closing }
- Before closing }

---

#### **Resources**

https://flaviocopes.com/javascript-automatic-semicolon-insertion/
https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli
https://news.codecademy.com/your-guide-to-semicolons-in-javascript/
http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/
https://www.youtube.com/watch?v=B4Skfqr7Dbs
