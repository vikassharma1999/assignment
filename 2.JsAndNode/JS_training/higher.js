isEven = (num) => num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);

console.log(result); // [2, 4]
add = (x) => (y) => x + y;
result = add(10)(20)
console.log(result)

add10 = add(10);
result = add10(20);

console.log(result); // 30