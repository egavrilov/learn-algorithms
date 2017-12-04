/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const num1 = nums[i];
    for (let j = 0; j < numsLength; j++) {
      if (i === j) { continue; }
      const num2 = nums[j];
      const sum = num1 + num2;
      if (sum === target) { return [i, j];}
    }
  }
};

const result = twoSum([2, 7, 11, 15], 9);
console.log(result);
