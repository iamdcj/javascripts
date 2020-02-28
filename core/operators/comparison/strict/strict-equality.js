// ============================= //
// ===== STRICT EQUALITY ===== //
// ============================= //
// IF either operands have different types;
console.info(1 === "1"); // false

// IF the operands are the same type, assess values;

// == TRIVIAL
console.info(undefined === undefined); // true
console.info(null === null); // true

// == NUMBERS
console.info(NaN === NaN); // false
console.info(19 === 19); // true
console.info(19 === 18); // false
console.info(-0 === +0); // true
console.info(0 === -0); // true
console.info(Infinity === Infinity); // true
console.info(-Infinity === -Infinity); // true
console.info(-Infinity === Infinity); // false

// == STRINGS
console.info("David" === "David"); // true
console.info("David" === "dAvid"); // false
console.info("David" === "Dvaid"); // false

// == BOOLEANS
console.info(false === true); // false
console.info(false === false); // true
console.info(true === true); // true

// == OBJECTS
console.info({} === {}); // false
console.info([] === []); // false

const user = {};
console.info(user === user); // true

const arr = [];
console.info(arr === arr); // true
