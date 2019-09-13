# Semicolons

Semicolons signify the end of a statement in JavaScript, that is they are used so provide separation between the end of one statement, and the start of another.

### Optional

Semicolons are not required when authoring JavaScript applications, dependant on how the authored code is formatted.

**If each statement lives on its own line, then there isn't a requirement for it to be completed with a semicolon.**

```
const test = "David"
import ( x ) from './y'
```

None of the above statements require finishing-off with a semicolon.

If there are two or more statements on the same line, then semicolons need to used to signify the end of each statement, aside from the last statement on the line.

```
const foo = "bar"; const bar = "baz"; const ham = "eggs"
```

There reason semicolons can be omitted in certain situations is due to the ASI mechanism built into the parsing engine.

### Automatic Semicolon Insertion

ASI is essentially a set of rules which determine when a semicolon will be automatically placed into a part of the application during the parsing phase.

---

#### **Resources**

https://flaviocopes.com/javascript-automatic-semicolon-insertion/
https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli
https://news.codecademy.com/your-guide-to-semicolons-in-javascript/
http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/
https://www.youtube.com/watch?v=B4Skfqr7Dbs
