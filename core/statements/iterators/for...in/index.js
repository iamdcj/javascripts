// objects
const dave = {
  name: "David",
  age: 32,
  logDetails() {
    console.log(this.name, this.age);
  }
};
// David
// 32
// [Function: logDetails]

for (const key in dave) {
  console.log(dave[key]);
}

// arrays
const arr1 = [1, 2, 3, 4];

for (const key in arr1) {
  console.log(arr1[key]);
}

// 1
// 2
// 3
// 4
