# Arrays 

### `typeof` object

Arrays are numerically ordered collections of data; they tend to contain numerous pieces of related data.

###### String array
```
const names = ["David", "Stephanie", "Nole"];

const David = names[0] // retrieve item by index

```

JS arrays can contain an mixture of any valid datatype:
```
const mixedBag = [1, "two", { number: 3 }];
```

Arrays are typeof object, but can be better considered a subtype of object; they are objects but with numerically indexed members, and they possess an updating `.length` property

```
console.log(names.length) // 3
```