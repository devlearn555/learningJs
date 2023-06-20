const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue
);

console.log(sumWithInitial);
// Expected output: 10


/* 
syntax of reducer = arr.reduce(callback(accumulator, currentValue), initialValue)
*/

const numbers = [1, 2, 3, 4, 5, 6];

// this is reducer function it will do the work
// sum_reducer is the callback here which will perform on origianl array
function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer); // this is example of hof how it executes
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21

let ints = [9,4,5,6,7,8,9]
function reducing(accumulator, currentValue) {
    return accumulator + currentValue
}
// console.log(initialValue)
let result = ints.reduce(reducing)
console.log(result) //48