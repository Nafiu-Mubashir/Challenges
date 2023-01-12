/**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
 */

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// let nums = [2, 7, 11, 15];
// let target = 9
// var twoSum = function (nums, target) {
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
       
//         for (let l = 1 + i; l < nums.length; l++) {
            
//             if (nums[i] + nums[l] === target) {
//                 result.push(i, l);
//                 console.log(result);
//             }
            
//         }

//     }
// };

// twoSum(nums, target);

s = "42"
var myAtoi = function(s) {
    let output = s.toString();
    console.log(output);
};
myAtoi(s)