/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
/*-----------------------------------Brandons WalkThrough------------*/

function sumArray(arr){
  let num = arr.pop()
  console.log(num)
  if (arr.length  === 0) return num;
  return sumArray(arr)+ num
}
////default method

// function sumArray(arr, sum = 0) {

//   if(arr.length === 0) return sum;

//   sum += arr.pop();

//   return sumArray(arr, sum)
// }
console.log(sumArray[1,2,3]); // 6

/*--------------------------------------------------------------------*/
// function sumArray(arr) {
//   let sum = 0;
//   if(arr.length === 0) {
//     return sum
//   } else {
//     sum += sum +arr[0]
//     return sum + sumArray(arr.slice(1))
//   }
// }
//console.log(sumArray[1,2,3]); // 6

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
