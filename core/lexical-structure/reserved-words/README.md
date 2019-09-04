# Reserved Words

JavaScript, like other programming languages, reserves a number of words which prevents them from being used as variable and function [identifiers](../identifiers).

Any attempt by an engineer to use one of these words as an identifier will result in the engine throwing an application error.

## Versions

This list has changed throughout the life of the language, with words being added and removed from specification version to specification version.

If `strict` mode is available in the executing implementation, additional reserved words are added to the list.

### ES1

|          |          |         |        |
| -------- | -------- | ------- | ------ |
| break    | for      | new     | var    |
| continue | function | return  | void   |
| delete   | if       | this    | while  |
| else     | in       | typeof  | with   |
| case     | debugger | export  | super  |
| catch    | default  | extends | switch |
| class    | do       | finally | throw  |
| const    | enum     | import  | try    |

### ES2 - ES3

|          |            |            |              |
| -------- | ---------- | ---------- | ------------ |
| break    | for        | new        | var          |
| continue | function   | return     | void         |
| delete   | if         | this       | while        |
| else     | in         | typeof     | with         |
| abstract | do         | import     | short        |
| boolean  | double     | instanceof | static       |
| byte     | enum       | int        | super        |
| case     | export     | interface  | switch       |
| catch    | extends    | long       | synchronized |
| char     | final      | native     | throw        |
| class    | finally    | package    | throws       |
| const    | float      | private    | transient    |
| debugger | goto       | protected  | try          |
| default  | implements | public     | volatile     |

### ES5

|          |          |            |        |
| -------- | -------- | ---------- | ------ |
| break    | do       | instanceof | typeof |
| case     | else     | new        | var    |
| catch    | finally  | return     | void   |
| continue | for      | switch     | while  |
| debugger | function | this       | with   |
| default  | if       | throw      | delete |
| in       | try      | class      | enum   |
| extends  | super    | const      | export |
| import   |

#### `strict` mode

|            |         |           |        |
| ---------- | ------- | --------- | ------ |
| implements | let     | private   | public |
| interface  | package | protected | static |
| yield      |

### ES2015 / ES6

|          |          |            |         |
| -------- | -------- | ---------- | ------- |
| break    | do       | in         | typeof  |
| case     | else     | instanceof | var     |
| catch    | export   | new        | void    |
| class    | extends  | return     | while   |
| const    | finally  | super      | with    |
| continue | for      | switch     | yield   |
| debugger | function | this       | default |
| if       | throw    | delete     | import  |
| try      | await    |

#### `strict` mode

|        |            |         |           |
| ------ | ---------- | ------- | --------- |
| let    | implements | package | protected |
| static | interface  | private | public    |

## Sketchy Words

There are a number of words which are not officially reserved words, and attempt to use these as identifiers is not a good idea.

#### Global Properties

The following words are read-only properties of the `global` object;

```

Infinity
NaN
undefined

```

Any attempt to use these as variables is futile as they cannot be initialized with another value;

```

var Infinity = "foo";
var NaN = "foo";
var undefined = "foo";

console.log(Infinity); // Infinity
console.log(NaN); // NaN
console.log(undefined); // undefined

```

```

```
