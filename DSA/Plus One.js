var plusOne = function(digits) {
    let n = digits.length;
    for(let i = n - 1; i >= 0; i--) {
        digits[i]++;
        if(digits[i] < 10) return digits;
        digits[i] = 0;
    }
    
    digits.unshift(1);
    return digits;
};