// Arrays  en JS

// const arr = new Array();
// arr.push(1);

let arr = [1, 2, 3, 4]


let arr2 = [...arr, 5];

const arr3 = arr2.map(function(num) {
  return num * 2;
});


console.log(arr);
console.log(arr2);
console.log(arr3);