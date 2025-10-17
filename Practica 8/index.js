// const map = (arr, callback) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     result[i] = callback(element);
//   }

//   return result;
// };

// const operation = (element) => {
//   return element * 10;
// };

// const mapFunction = map([1, 2, 3, 4], operation);

// console.log(mapFunction);

const factorial = (n) => {
    if (n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(200))