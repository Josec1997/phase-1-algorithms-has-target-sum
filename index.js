function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];  
    // console.log(`Checking if there is a ${complement} in the array.`);
    for (let j = i + 1; j < array.length; j++) {
    // console.log(`Checking if ${array[j]} is equal to ${complement}.`);
    if (array[j] === complement) return true;
}
}
return false;
}



/* 
  Write the Big O time complexity of your function here
runtime: O(n^2)

*/



/* 
  Add your pseudocode here
there is a an an array of numbers, if any of those numbers pair up and equal to the sum of the target, return true. if not return false.

hasTargetSum([num1, num2, num3 ,etc], (sum of a pair of nums)) 
use i for nums
set a const from: difference of target - array[i]
pair up with all other numbers and if it = Target, return true.
*/

/*
  Add written explanation of your solution here
created a function hasTargetSum to return true if the array has a set of two numbers that sum up to the target. we loop 'i' iterating from '0' from length minus 1. adding that to 'j' also iterating through array length of 'i' plus 1. If pair equal that of target, return true or otherwise false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('expecting: true');
  console.log('=>', hasTargetSum([1,2,3,4,5], 7));

  console.log('');



  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


// This function receives an array and a target number as input, and it returns a boolean indicating whether it is possible to find two elements in the array whose sum is equal to the target number.
// The function first iterates through the array using a for loop with a loop variable `i` that takes on all possible values from 0 to the length of the array minus 1. For each value of `i`, it calculates the complement of `array[i]`, which is the value that when added to `array[i]` gives the target number. The complement is calculated as `complement = target - array[i]`.
// Then, the function has a nested for loop that iterates through the array again, starting at the element immediately following `array[i]`. This loop variable is `j`, and it takes on all possible values from `i + 1` to the length of the array minus 1. For each value of `j`, the function checks if `array[j]` is equal to the complement calculated earlier. If this condition is true, the function returns `true`. If the condition is false for all values of `j`, the function continues to the next iteration of the outer loop and tries the next value of `i`.
// If the function completes both loops and no pair of elements in the array sums to the target number, it returns `false`.