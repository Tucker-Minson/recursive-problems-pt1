/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/
/*-----------------------------Brandons Walkthrough----------------------------------------------
Understand the Problem-
  Input: an array and a string ==>['vanilla', 'strawberry'], 'blue moon'
  Output: a boolean ==> true or false

Make a Plan-
  1.define a function that takes in an arr and a string
  2.base case: if(!flavor.length) return false;
  3.if (flavor[0] === favorite) return true
  4.recursive step: return iceCreamShop(flavor, favorite)
*/

function iceCreamShop(flavors, favorite) {
  if (!flavors.length)return false;

  if (flavors[0] === favorite)return true

return iceCreamShop(flavors.slice(1), favorite)

}

iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
/*----------------------------------------------------------------------------------------------- */
// function iceCreamShop(flavors, favorite) {
//   // Your code here
//   if (flavors.includes(favorite)) {
//     return true
//   }
//   if (flavors.length === 0){
//     return false
//   }
//   return iceCreamShop(flavors.slice(1))
// }


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
