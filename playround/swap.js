let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Swap the numbers without a third variable
a = a + b;
console.log('a+b', a)
b = a - b;
console.log('b-a', b)
a = a - b;
console.log('a-b', a)
console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);