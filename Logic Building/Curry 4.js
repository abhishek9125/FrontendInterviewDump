// Input:
console.log(add(1)(2).value() == 3); 
console.log(add(1, 2)(3).value() == 6); 
console.log(add(1)(2)(3).value() == 6); 
console.log(add(1)(2) + 3);

// Output:
// true
// true
// true
// 6