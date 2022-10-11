/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

/*---------------------------Brandon's Walk Through---------------------------
Understanding the Problem-
  Input: a number ==> 3
  Output: a number ==> 6
  3 + 2 + 1 ==> 6
    * negative number
    * recursive

Make a Plan-
  1. Define a function that takes in a number
  2. Base case: if(n <= 0) return null;
    #Base case 2if (n === 0)
  3. Recusive step: return sumToN(n - 1) + n
Exicute the Plan-*/
function sumToN(n) {
  if(n <=0) return null;

  return sumToN(n-1) + n;
}
console.log(sumToN(3)) // returns 6
//console.log(null + 4)
/*
What is happening here
sumToN(3) ==> func(2) + 3
  sumToN(2) ==> func(1) + 2
    sumToN(1) ==> func(0) + 1
      sumToN(0) ==> return null
                                // now our function is arguing 0 so return null
      sumToN(0) ==> return null
    sumToN(1) ==> 0 + 1 = 1
  sumToN(2) ==> 1 + 2 = 3
sumToN(3) ==> 3 + 3 = 6 ==> RETURN VALUE 6


  Refactor-
---------------------------------------------------------------------------- */
// function sumToN(n) {
//   // Your code here
//   let sum = 0;
//   if (n < 0) {return null}
//   else{
//     sum += n
//     return sum + sumToN(n-1)
//   }

// }


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
