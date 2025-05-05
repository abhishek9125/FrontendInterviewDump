class Solution {
    maxSubArray(nums) {
        let currentSum = 0;
        let maximumSum = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            maximumSum = Math.max(maximumSum, currentSum);
            if (currentSum < 0) currentSum = 0;
        }

        return maximumSum;
    }
}

var maxSubArray = function (nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) currentSum = 0;
        currentSum = currentSum + nums[i];
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
};