function max(...arr) {
  var max = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
}

function max_forof(...arr) {
  var max = arr[0];
  for (const x of arr) {
    if (x > max) {
      max = x;
    }
  }
  return max;
}

function max_foreach(...arr) {
  var max = arr[0];
  arr.forEach((x) => {
    if (x > max) {
      max = x;
    }
  });
  return max;
}

function add_array(arr1, arr2) {
  var arr3 = [];
  for (let index = 0; index < arr1.length; index++) {
    arr3.push(arr1[index] + arr2[index]);
  }
  return arr3;
}

function avg_array(...arr) {
  var sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  var avg = sum / arr.length;
  return avg;
}

function avg_array_forof(...arr) {
  var sum = 0;
  for (const x of arr) {
    sum = sum + x;
  }
  var avg = sum / arr.length;
  return avg;
}

function avg_array_foreach(...arr) {
  var sum = 0;
  arr.forEach((x) => {
    sum = sum + x;
  });
  var avg = sum / arr.length;
  return avg;
}

function evenodd_arr(...arr) {
  var even = 0;
  var odd = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  return [even, odd];
}

function evenodd_arr_forof(...arr) {
  var [even, odd] = [0, 0];
  for (const x of arr) {
    if (x % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  return [even, odd];
}

function evenodd_arr_foreach(...arr) {
  var [even, odd] = [0, 0];
  arr.forEach((x) => {
    if (x % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  });
  return [even, odd];
}

function min_2Darr(arr) {
  var min = arr[0][0];
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr[index].length; index2++) {
      if (arr[index][index2] < min) {
        min = arr[index][index2];
      }
    }
  }
  return min;
}

function min_2Darr_forof(arr) {
  var min = arr[0][0];
  for (const x of arr) {
    for (const y of x) {
      if (y < min) {
        min = y;
      }
    }
  }
  return min;
}

function min_2Darr_foreach(arr) {
  var min = arr[0][0];
  arr.forEach((x) => {
    x.forEach((y) => {
      if (y < min) {
        min = y;
      }
    });
  });
  return min;
}

function search(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr[index].length; index2++) {
      if (value === arr[index][index2]) {
        return [index, index2]; // Return the indices directly
      }
    }
  }
  return null; // Return null if the value is not found
}

function search_forof(arr, value) {
  for (const x of arr) {
    for (const y of x) {
      if (value == y) {
        return y;
      }
    }
  }
}

function search_foreach(arr, value) {
  var searched = null;
  arr.forEach((x) => {
    x.forEach((y) => {
      if (value == y) {
        searched = y;
      }
    });
  });
  return searched;
}

function diagonal(size) {
  var arr = [];
  for (let index = 0; index < size; index++) {
    arr[index] = [];
    for (let index2 = 0; index2 < size; index2++) {
      arr[index][index2] = Math.floor(Math.random() * 10);
    }
  }
  console.log(`The array is:`);
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr[index].length; index2++) {
      console.log(arr[index][index2]);
    }
    console.log("\n");
  }
  console.log(`The main diagonal is:`);
  var sum = 0;
  var min = arr[0][0];
  var position = null;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index][index] < min) {
      min = arr[index][index];
    }
    sum = sum + arr[index][index];
    position = [index, index];
    console.log(arr[index][index]);
  }
  console.log(`The sum of the diagonal is ${sum}`);
  console.log(
    `The minimun value in the diagonal is ${min} at position ${position}`
  );
}

var a = 4;
var b = 2;
var c = 1;

console.log(
  `The maximum value is ${max_foreach(1, 0, 2, 9, 3, 8, 4, 7, 5, 6, 12)}`
);

console.log(`The average of array is ${avg_array_forof(1, 2, 3, 4, 5, 6)}`);

console.log(
  `The number of even and odd numbers are ${evenodd_arr_foreach(1, 2, 3, 4, 5)}`
);

var arr = [
  [7, 3, 3],
  [4, 5, 6],
  [3, 9, 8],
];

console.log(`The minimum value in the 2D array is ${min_2Darr_foreach(arr)}`);

console.log(`the value 6 in the arr is at position ${search_foreach(arr, 6)}`);

diagonal(3);
