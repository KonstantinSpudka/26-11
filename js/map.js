const m1 = new Map();
console.log("m1 :>> ", m1);

// Колекція по ключу, яка може в качестве ключа содержать любой тип

// Свойства/методи
// size
// set(key, value) => map
// get(key) => value
// has(key) => boolean
// delete(key) => boolean
// clear()

// keys() => MapKeyIterator
// values() => MapKeyIterator
// enrties() => MapKeyIterator
// forEach() =>

// m1.Test = '38012345678';
m1.set("Test", "+38012345678");
m1.set("Test2", "+38012345678");
m1.set("Test3", "+38012345678");

console.log('m1.get("test") :>> ', m1.get("Test"));

// Test у m1
console.log('m1.has("Test") :>> ', m1.has("Test"));
console.log('m1.has("Test") :>> ', m1.has("Test1"));

// delete m1.Test3
m1.delete("Test3");
console.log("m1 :>> ", m1);

// m1.clear();
// console.log("m1 :>> ", m1);

for (let item of m1) {
  console.log("item :>> ", item);
}

const arrKeys = [];
console.log("m1.keys() :>> ", m1.keys());
for (const key of m1.keys()) {
  console.log("key :>> ", key);
  arrKeys.push(key);
}
console.log("arrKeys :>> ", arrKeys);
// АБО
const myArrKeys = [...m1.keys()];

// отримати масив значень з мапи (values)
const myArrValues = [...m1.values()];

const myArrEntries = [...m1.entries()];

const m2 = new Map([["name", "tel"], [("name2", "tel2")]]);

const o2 = {
  Ivo: "Ivo1",
  Iva2: "Ivo2",
};

const map = new Map(Object.entries(o2));

const vocabulary = new Map();
vocabulary.set("dog", "собака");
vocabulary.set("cat", "кіт");
vocabulary.set("run", "бігти");

const engPhrase = "dog run white cat";

translate(engPhrase);

// function translate(engPhrase) {
//   // розділити фразу на слова
//   const engWords = engPhrase.split(" ");
//   console.log("engWords :>> ", engWords);

//   // якщо в словнику є слово, то перекласти, якщо ні, то залишити як є
//   function engToUkr(e) {
//     if (vocabulary.has(e)) {
//       return vocabulary.get(e);
//     }
//     return e;
//   }
//   const ukrWords = engWords.map(engToUkr); // map + has + get

//   // з'єднати слова в один рядок
//   const ukrPhrase = ukrWords.join(" ");

//   return ukrPhrase;
// }

function translate(engPhrase) {
  return engPhrase
    .split(" ")
    .map((e) => (vocabulary.has(e) ? vocabulary.get(e) : e))
    .join(" ");
}
// АБО
// const translate = (engPhrase) =>
//   engPhrase
//     .split(" ")
//     .map((e) => (vocabulary.has(e) ? vocabulary.get(e) : e))
//     .join(" ");

const user = { name: "Test" };
const mes = {
  [user]: ["hello", "))))"],
};

const m10 = new Map();
m10.set(user, ["hello", ")))"]);

console.log("m10.get(user) :>> ", m10.get(user));
