function maxProducts(nums) {
    let n = nums.length;
    let ans = Number.MIN_SAFE_INTEGER;
    let prefix = 1, suffix = 1;

    for(let i = 0; i < n; i++) {
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;
        prefix = prefix * nums[i];
        suffix = suffix * nums[n - i - 1];
        ans = Math.max(ans, prefix, suffix);
    }

    return ans;
}

console.log(maxProducts([1, -2, 3, 4, -4, -3]))