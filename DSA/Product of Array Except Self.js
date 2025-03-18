var productExceptSelf = function(nums) {
    let prefixProduct = [1];
    let suffixProduct = [];

    for(let i = 1; i < nums.length; i++) {
        prefixProduct[i] = prefixProduct[i-1]*nums[i-1];
    }

    suffixProduct[nums.length - 1] = 1;

    for(let i = nums.length - 2; i >= 0; i--) {
        suffixProduct[i] = suffixProduct[i+1]*nums[i+1];
    }

    let result = [];

    for(let i = 0; i < nums.length; i++) {
        result.push(suffixProduct[i] * prefixProduct[i]);
    }
    return result;
};