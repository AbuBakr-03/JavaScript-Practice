function circumference(radius) {
  return 2 * 3.14 * radius;
}

function calculator(option, a, b) {
  if (option == "1") {
    return a + b;
  } else if (option == "2") {
    return a - b;
  } else if (option == "3") {
    return a * b;
  } else if (option == "4") {
    return a / b;
  } else {
    console.log("The wrong choice");
  }
}

function switch_calculator(option, a, b) {
  switch (option) {
    case "1":
      return a + b;
      break;
    case "2":
      return a - b;
      break;
    case "3":
      return a * b;
      break;
    case "4":
      return a / b;
      break;
    default:
      console.log("The wrong choice");
      break;
  }
}

function triangle(h, b) {
  return (1 / 2) * h * b;
}

function swapping(a, b) {
  var temp = a;
  a = b;
  b = temp;
  console.log(`The values after swapping, a = ${a} and b = ${b} `);
}

function Even_Odd(value) {
  if (value % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function pythagoras(a, b, c) {
  var x = a * a;
  var y = b * b;
  var z = c * c;
  if (x + y == z) {
    return "pythagoras";
  } else if (x + z == y) {
    return "pythagoras";
  } else if (y + z == x) {
    return "pythagoras";
  } else {
    return "not pythagoras";
  }
}

function average_till_n(n) {
  var x = 1;
  var sum = 0;
  do {
    sum = sum + x;
    x = x + 1;
  } while (x <= n);
  var average = sum / n;
  return average;
}

function factorial(limit) {
  var product = 1;
  for (let index = 2; index <= limit; index++) {
    product = product * index;
  }
  return product;
}

function multiples(value) {
  for (let index = 0; index <= 10; index++) {
    console.log(`${value} multiplied by ${index} is ${value * index}`);
  }
}

function range_even(start, end) {
  for (let index = start; index < end; index++) {
    if (index % 2 == 0) {
      console.log(index);
    }
  }
}

var radius = 5;
console.log(
  `The circumference of circle with radius : ${radius} is : ${circumference(
    radius
  )}`
);

var option = "2";
var a = 4;
var b = 2;
var c = 1;
console.log(
  `The calculation of ${a} and ${b} according to option ${option} is : ${calculator(
    option,
    a,
    b
  )}`
);

console.log(
  `The calculation of ${a} and ${b} using switch statement, according to option 3 is : ${calculator(
    "3",
    a,
    b
  )}`
);

console.log(
  `The area of triangle with height ${a} and base ${b} is ${triangle(a, b)}`
);

console.log(`The values before swapping, a = ${a} and b = ${b}`);
swapping(a, b);

console.log(`The value ${a} is ${Even_Odd(a)}.`);

console.log(`The values ${a}, ${b} and ${c} are ${pythagoras(a, b, c)}`);

console.log(
  `The average of natural numbers from 1 to ${a} is ${average_till_n(
    parseInt(a)
  )}`
);

console.log(`The factorial of ${a} is ${factorial(parseInt(a))}`);

multiples(4);
range_even(4, 16);
