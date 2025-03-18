class Solution {
    maxSubArray(nums) {
        let currentSum = 0;
        let maximumSum = -Infinity;

        for(let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            maximumSum = Math.max(maximumSum, currentSum);
            if(currentSum < 0) currentSum = 0;
        }

        return maximumSum;
    }
}