/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numObj = {};
    let result;
    nums.forEach((num, i) => numObj[target - num] !== undefined ? result = [numObj[target - num], i] : numObj[num] = i);
    return result;

};
