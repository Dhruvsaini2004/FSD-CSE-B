const add = require('../JS/demo1');

console.log("sum = ", add(10, 20));

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = num.filter((n) => (n % 2 == 0));
console.log(even);
const squ = even.map((n) => (n * n));
console.log(squ);
const added = even.reduce((n, count) => (n + count), 0);
console.log(added);
