const symbolVar = Symbol();

console.log("symbolVar :>> ", symbolVar);

const privatKey = Symbol();

const user = {
  age: 15,
  [privatKey]: "1234567898765432",
};

console.log("user[Symbol()] :>> ", user[privatKey]);

const THEMES = {
  // LIGHT: "LIGHT",
  // DARK: "LIGHT",

  LIGHT: Symbol("light"),
  DARK: Symbol("dark"),
};

const theme = THEMES.DARK;

switch (theme) {
  case THEMES.DARK:
    console.log("THEMES.DARK :>> ", THEMES.DARK);
    break;
  case THEMES.LIGHT:
    console.log("THEMES.DARK :>> ", THEMES.LIGHT);
    break;
  default:
    console.log("unexpected value");
}

// Symbol.literator

// 1 for..of

// 2 деструктуризація колекцій (масивів)
const [first, second] = [1, 2];

// 3 spread operator
// створення копії колекції
// конкатенаця колекції

// для масивів:
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

function f() {
  console.log("arguments :>> ", arguments);
  const args = [...arguments];
  console.log("args :>> ", args);
}
f(1, 2, 3);

const arr3 = [9, 8, 7];
const arr13 = [...arr1, ...arr3];
console.log("arr13 :>> ", arr13);

function f1(a, b, c) {
  console.log("a, b, c :>> ", a, b, c);
}

const arr10 = [1, 2, 7];

// f1(arr10[0], arr10[1], arr10[2]);
// АБО коротше
f1(...arr10);

// для об'єктів
const user1 = {
  name: "Test",
  age: 30,
};
const user2 = { ...user1 };

const user3 = {
  isMail: true,
  isSubscribed: false,
};

const user13 = { ...user1, ...user3 };

sendRequest({ url: "http://google.com" });

function sendRequest(options) {
  const defaultOptions = {
    url: "http://localhost",
    port: 3000,
  };
  // отримати resultOptions з options і defaultOptions шляхом розширення (spread)
  const resultOptions = { ...defaultOptions, ...options };
  console.log("resultOptions :>> ", resultOptions);
  // resultOptions = {url: 'http://google.com', port: 3000,}
}
// const resultOptions = {
//   url: "http://localhost",
//   port: 3000,
//   url: "http://google.com",
// };

// Arrey.from() - створюэ масив з псевдомасиву або з ітерованої колекції
