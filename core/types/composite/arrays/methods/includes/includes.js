// Integers
const arr1 = [1, 2, 3, 4];

arr1.includes(3); // true

// Strings
const arr2 = ["David", "Steffie", "Nole"];

arr2.includes("Bob"); // false

// Objects
const arr3 = [{ user: "David" }, { user: "Steffie" }, { user: "Nole" }];

arr3.includes({ user: "Steffie" }); // false
