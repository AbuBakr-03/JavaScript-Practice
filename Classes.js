class Animals {
  constructor(color = "red") {
    this.color = color;
  }
  eat() {
    console.log("Eats");
  }
}

class Carnivore extends Animals {
  constructor(color = "red", type = "medium") {
    super(color);
    this.type = type;
  }
  eat() {
    super.eat();
    console.log("Meat");
  }
}

class Herbivore extends Animals {
  constructor(color = "red", sound = "moo") {
    super(color);
    this.sound = sound;
  }
  eat() {
    super.eat();
    console.log("Veg");
  }
}

var goat = new Animals("black");
console.log(goat);
console.log(goat.color);
goat.eat();

var cow = new Herbivore("White");
console.log(cow);
cow.eat();

var lion = new Carnivore("yellow", "Big");
console.log(lion);
lion.eat();
