const digitalRoot = (n) => {
    let sum = 0;

    while(n > 0) {
        let temp = n % 10;
        sum += temp;
        n = parseInt(n / 10);

    }
    
    if(sum < 10) {
        return sum;
    }

    return digitalRoot(sum);
}

console.log(digitalRoot(54321));