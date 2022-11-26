const user = {
  name: "name",
  age: 15,
};

for (let key in user) {
  console.log("key1 :>> ", key);
}

const arr = [1, 2, 3, 4];

for (let key in arr) {
  console.log("key2 :>> ", key);
}

// for..in

function User1(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User1.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User1.isUser1 = function (obj) {
  return obj instanceof User1;
};

const user1 = new User1("test", "test2", 20, true, "t@g.com", true);

for (let key in user1) {
  console.log("key :>> ", key);
}

for (const key in user1) {
  if (user1.hasOwnProperty(key)) {
    // const element = object[key];
    console.log("key own:>> ", key);
  }
}

// повертає масив з власних перелічуваних властивостей
Object.keys(user).forEach((key) => console.log("key value :>> ", user[key]));

Object.keys(user1).forEach((key) => console.log("key value1 :>> ", user1[key]));

// повертає масив з власних перелічуваних значень властивостей
console.log("object.values(user1) :>> ", Object.values(user1));

// повертає масив з власних перелічуваних пар [властивість, ключ]
console.log("object.entries(user1) :>> ", Object.entries(user1));
