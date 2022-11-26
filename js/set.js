const set1 = new Set();

// Колекція унікальних значень

// size
// add()
// has()
// delete()

// values()
// entries()
// forEach

set1.add(1).add(2).add(3).add(1).add(1);

console.log("set.has(1) :>> ", set1.has(1));
console.log("set.has(1) :>> ", set1.has(5));

set1.delete(1);
console.log("set1 :>> ", set1);

//set1.clear();

for (const item of set1) {
  console.log("item :>> ", item);
}

console.log("set1.entries() :>> ", set1.entries());

//const map1 = new Map([1, 2], [])
const map1 = new Map([...set1.entries()]);

// keys(), values() - отримати масиви ключів та значень

const set1Keys = [...set1.keys()];
console.log("setKey :>> ", set1Keys);
const set1Values = [...set1.values()];
console.log("set1Values :>> ", set1Values);

console.log("Перебір set :>> ");

function printSet(currentValues, currentKey, set) {
  console.log("currentValues :>> ", currentValues);
  console.log("currentKey :>> ", currentKey);
  console.log("set :>> ", set);
}

set1.forEach(printSet);

// Отримати масив унікальних значень
const arr = [1, 2, 3, 4, 1, 1, 1, 2, 3, 4, 5, 6]; // = [1, 2, 3, 4, 5, 6]

// const set2 = new Set(arr);
// const uniqArr = [...set2];
// АБО
const uniqArr = [...new Set(arr)];

const user1 = [
  "Test",
  "Gruit",
  "Jon Doe",
  "Gruit",
  "Jon Doe",
  "Gruit",
  "Jon Doe",
];
const user2 = [
  "Test",
  "Jane Doe",
  "Test",
  "Jane Doe",
  "Test",
  "Jane Doe",
  "Gruit",
];

// Отримати масив унікальних імен ['Test', 'Gruit', 'Jon Doe', 'Jane Doe']
const uniqName = [...new Set([...user1, ...user2])];
console.log("uniqName :>> ", uniqName);

// Отримати масив марок телефону
const users = [
  { name: "Test0", phone: "IPhone" },
  { name: "Test1", phone: "Samsung" },
  { name: "Test2", phone: "IPhone" },
  { name: "Test3", phone: "Xiaomi" },
  { name: "Test4", phone: "IPhone" },
  { name: "Test5", phone: "Samsung" },
  { name: "Test6", phone: "Xiaomi" },
];

// => ['IPhone', 'Samsung', 'Xiaomi']
// const arr2 = [...new Set(users.map(item => item.bread))];
// console.log("usersPhone :>> ", users.map);

// const brands = [...new Set(users.map((item) => item.bread))]; // ставить зайві скобки

// usersWithPhones = {};
// brands.forEach((b) => {
//   usersWithPhones[b] = users.filter((u) => b === u.brand).map((u) => u.brand); // ставить зайві скобки
// });
// console.log("usersWithPhones :>> ", usersWithPhones);

const brands = [...new Set(users.map((item) => item.brand))];

usersWithPhones = {};

brands.forEach((b) => {
  usersWithPhones[b] = users.filter((u) => b === u.brand).map((u) => u.name);
});
console.log("usersWithPhones :>> ", usersWithPhones);
