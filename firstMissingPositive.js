/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
    // we can ignore numbers > array.length, because those are out of sequence
    // we can ignore negative numbers
    // we can ignore duplicates
    // use the array to mark which values are present by marking the sorted position in the array as true
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (typeof(num) === "object") num = num.value;
        const numPos = num-1;
        const numberIsDuplicate = typeof(nums[numPos]) === "object";
        if (num > 0 && num <= nums.length && !numberIsDuplicate) {
            nums[numPos] = { value: nums[numPos] };
        }
    }

    // for the first position that is a type of number return
    for (let i = 0; i < nums.length; i++) {
        if (typeof(nums[i]) === "number") {
            return i+1;
        }
    }

    // if we haven't already returned than all the elements must be in order, return the next in sequence
    return nums.length+1;
};

module.exports = firstMissingPositive;