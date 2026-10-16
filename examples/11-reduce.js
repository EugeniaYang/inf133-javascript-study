const array1 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
var total = array1.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
 }, 0)

console.log(total)// expected output: 10
