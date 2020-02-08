// Find
[1, 2, 3].find(n => n === 2); // 2

// No Find
[1, 2, 3].find(n => n === 4); // undefined

// Objects

const users = [
  { user: "David" },
  { user: "Steffie" },
  { user: "Nole", id: 1 },
  { user: "Nole", id: 2 }
];

users.find(({ user }) => user === "Nole");

// {user: "Nole", id: 1}

// Number

const ints = [3, 12, 200, 101, 230, 30];

ints.find(i => i > 100);

// 200;

//String

const names = ["David", "Steffie", "Nole"];

names.find(n => n.includes("D"));

// "David"
