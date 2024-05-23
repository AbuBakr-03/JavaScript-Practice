//literal objects

var student = {
  name: "Abubakr",
  age: 20,
  class: function () {
    print("CLASS 6B");
    this.section = "6B";
  },
};

// factory functions

function Person(x, y, z) {
  return {
    name: x,
    age: y,
    class: function () {
      print("CLASS 6B");
      this.section = y;
    },
  };
}

//constructor function

function Person(x, y, z) {
  this.name = x;
  this.age = y;
  this.class = function () {
    print("CLASS 6B");
    this.section = y;
  };
}

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

var cloth = Object.create(clothingItem);
cloth.season = "Fall";
console.log(cloth);

for (const x of Object.keys(clothingItem)) {
  console.log(clothingItem[x]);
}

for (const x of Object.keys(clothingItem)) {
  console.log(x);
}

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (var x of Object.keys(bird)) {
    console.log(`${x}: ${bird[x]}`);
  }
}

birdCan();

//destructuring

//map and set

//spread

// copying
let fruits = ["apple", "banana", "orange"];
let food = [...fruits];

//concat
let fooder = [...fruits, ...food];

//calling
fridge(...food, ...fruits);

//rest
var food1 = "Apple";
var food2 = "Banana";
var food3 = "Orange";

fridge(food1, food2, food3);

function fridge(...foods) {
  console.log(foods);
}
