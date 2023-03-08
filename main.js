const numbers = [];
for (let i = 0; i < 7; i++) {
  const number = prompt(`Введіть число ${i + 1}`);
  numbers.push(Number(number));
}
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers.length);
