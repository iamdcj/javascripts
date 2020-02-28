// ============================= / /
// ===== STRICT INEQUALITY ===== //
// ============================= //
// IF either operands have different types;
console.info(1 !== "1"); // true

// IF the operands are the same type, assess values;

// == TRIVIAL
console.info(undefined !== undefined); // false
console.info(null !== null); // false

// == NUMBERS
console.info(NaN !== NaN); // true
console.info(19 !== 19); // false
console.info(19 !== 18); // true
console.info(-0 !== +0); // false
console.info(0 !== -0); // false
console.info(Infinity !== Infinity); // false
console.info(-Infinity !== -Infinity); // false
console.info(-Infinity !== Infinity); // true

// == STRINGS
console.info("David" !== "dAvid"); // true
console.info("David" !== "Dvaid"); // true

// == BOOLEANS
console.info(false !== true); // true
console.info(false !== false); // false
console.info(true !== true); // false

// == OBJECTS
console.info({} !== {}); // true
console.info([] !== []); // true

const user = {};
console.info(user !== user); // false

const arr = [];
console.info(arr !== arr); // false
