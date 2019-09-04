// Write a recursive function that split a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: 02202020

function stringSplitter(str, seperator) {
  if(str.length === 0){
    return '';
  }
  if(str[0] !== seperator){
    return str[0] + stringSplitter(str.slice(1), seperator)
  }
  return stringSplitter(str.slice(1), seperator)
}


// const filter = function(arr, predicate){
//   //base case
//   if (!arr.length){
//       return [];
//   }

//   if (predicate(arr[0])) {
//       // [5,6,3,8] -- > [5,6,3,8]
//       return [ arr[0], ...filter(arr.slice(1), predicate) ];
//   }

//   // [10,5,6,3,8] // [5,6,3,8]
//   return filter(arr.slice(1), predicate);
// };