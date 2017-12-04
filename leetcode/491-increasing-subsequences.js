/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const numsLength = nums.length;
  const result = [];

  // iterate numbers until length - 1
  for (let startIdx = 0; startIdx < numsLength; startIdx++) {
    // iterate subsequence length
    for (
      let subsequenceLength = 2;
      subsequenceLength <= numsLength;
      subsequenceLength++
    ) {
      const variantsLength = numsLength - subsequenceLength;
      for (
        let variantIndex = startIdx;
        variantIndex <= variantsLength;
        variantIndex++
      ) {
        const firstNum = nums[startIdx];
        let subsequence = [firstNum];
        // iterate subsequence length by numbers
        for (let valueIndex = 1; valueIndex < subsequenceLength; valueIndex++) {
          const nextNum = nums[variantIndex + valueIndex];
          if (typeof nextNum === 'undefined') {
            subsequence = null;
            break;
          }
          subsequence.push(nextNum);
        }

        if (subsequence && isUniqArray(result, subsequence)) {
          result.push(subsequence);
        }
      }
    }
  }

  return result;
};



function isUniqArray (collection, array) {
  return collection.every((existing) => {
    if (existing.length !== array.length) {
      return true;
    }

    return existing.some((value, index) => value !== array[index]);
  })
}

console.log(findSubsequences([4, 6, 7, 7]));
// [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]


/*
Input:
[1,3,5,7]
Output:
[[1,3],[1,5],[1,7],[1,3,5],[1,5,7],[1,3,5,7],[3,5],[3,7],[3,5,7],[5,7]]
Expected:
[[5,7],[1,5,7],[3,5,7],[1,3,7],[1,3,5,7],[1,3,5],[1,3],[1,5],[3,5],[1,7],[3,7]]
*/
