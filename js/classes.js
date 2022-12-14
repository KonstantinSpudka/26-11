// function User1(name, surname, age, isMale, email, isSubscribed) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }

// User1.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User1.isUser1 = function (obj) {
//   return obj instanceof User1;
// };

// Класи - синтаксичний цукор над вбудованими в жс функціями-конструкторами і прототипами
// class User {
//   constructor(name, surname, age, isMale, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age; // спрацьовує сеттер
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
//   }
//   // сеттер - спеціального вигляду метод
//   set age(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("age must be number");
//     }
//     if (value < 0 || value > 150 || !Number.isInteger(value)) {
//       throw new RangeError("age must be 0-130 integer");
//     }
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   // статичний метод - працює для класа, а не для його екземпляра
//   static isUser(obj) {
//     return obj instanceof User;
//   }
// }

// constructor - аналог функції-конструктора
// const user11 = new User("Test", "Testovich", 25, true, "test@gmail.com", true);

// try {
//   const user1 = new User("Test", "Testovich", 25, true, "test@gmail.com", true);
//   console.log("user1.getFullName() :>> ", user1.getFullName());
//   console.log("User.isUser({}) :>> ", User.isUser({}));
//   console.log("User.isUser(user1) :>> ", User.isUser(user1));
//   user1.age = 26; // спрацьовує сеттер (дозволяє звернутися до метода і встановити значення за синтаксисом властивості)
//   console.log("user.age :>> ", user1.age); // спрацьовує геттер (дозволяє звернутися до метода і отримати значення за синтаксисом властивості)
// } catch (err) {
//   console.log("err :>> ", err);
// }

// Task: реалізувати клас для телефонів (марка, модель, колір, ціна, рік випуску)
// реалізувати метод для розрахунку віку телефону
// створити екземпляр класу, викликати для нього метод

// class Phone {
//   constructor(mark, model, color, price, year) {
//     this.mark = mark;
//     this.model = model;
//     this.color = color;
//     this.price = price;
//     this.year = year;
//   }
//   getAge() {
//     return new Date().getFullYear() - this.year;
//   }
// }

// const telephone1 = new Phone("Nokia", "3310", "black", 2000, 2010);
// console.log(telephone1.getAge());

// ----------------------------------------

// ООП
// інкапціляція - приховання логіки (особливостей реалізації)
// спаткування (спеціалізація) - перевикористання структури та логіки (спеціалізація, is a)
// поліморфізм - можливість через однаковий інтирфейс працювати з різними типами

// базовий або батьківським
class User {
  constructor(name, surname, age, isMale, email) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age; // спрацьовує сеттер
    this.isMale = isMale;
    this.email = email;
    this.isBanned = false;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Test", "Testovich", 25, false, "test@test.com");

// дочірний або спадкоємець
class Moderator extends User {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email);
    this.permission = permission;
  }
  sendMessage(user, message) {
    console.log(
      `Moderator ${this.getFullName()} send message "${message}" to ${user.getFullName()}`
    );
  }
}

const permission = {};
// debugger;
const moderator1 = new Moderator(
  "Mod",
  "Moderovich",
  35,
  true,
  "mod@test.com",
  permission
);
console.log("moderator1.getFullName() :>> ", moderator1.getFullName());
moderator1.sendMessage(user1, "Your message was banned");

// Реалізувати клас Admin, який є модераторомб
// і на додачу має
// властивість category (1, 2)
// реалізувати логіку (забанити або зняти бан з конкретного користувача)
// bann
// unbann

// Створити  об'єкт класу Admin, протистувати роботу bann, unbann
class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permission, category) {
    super(name, surname, age, isMale, email, permission);
    this.category = category;
  }

  bann(user) {
    user.isBanned = true;
    console.log(`You were banned by ${this.getFullName()}`);
  }
  unbann(user) {
    user.isBanned = false;
    console.log(`You were unbanned by ${this.getFullName()}`);
  }
  // перевизначк
  sendMessage(user, message) {
    console.log(
      `Admin ${this.getFullName()} send message "${message}" to ${user.getFullName()}`
    );
  }
}
const admin1 = new Admin(
  "Admin",
  "Adminovych",
  30,
  true,
  "admin@gmail.com",
  permission,
  1
);
console.log("admin1.getFullName =>", admin1.getFullName());
admin1.bann(user1);
admin1.unbann(user1);

/**************************************************************/
// admin1.sendMessage();
// moderator1.sendMessage();

// абстрактний клас - клас без реалізації
class Figure {
  constructor(name) {
    this.name = name;
  }
  getAria() {
    return null;
  }
}

class Square extends Figure {
  constructor(sideLenght) {
    super("square");
    this.a = sideLenght;
  }
  getAria() {
    return this.a * this.a;
  }
}

const square1 = new Square(6);
console.log("square1.getAria() :>> ", square1.getAria());

// Реалізувати клас для Rectangle
class Rectangle extends Figure {
  constructor(sideLenght, sideLenght1) {
    super("Rectangle");
    this.a = sideLenght;
    this.b = sideLenght1;
  }
  getAria() {
    return this.a * this.b;
  }
}

const Rectangle1 = new Rectangle(6, 5);
console.log("square1.getAria() :>> ", Rectangle1.getAria());

function calcAria(fig) {
  // if(fig instanceof Square || fig instanceof Rectangle)
  if (fig instanceof Figure) {
    return fig.getAria();
  }
  console.log("fig is not a Figure");
}
