/* export function add(num1, num2) {
  return num1 + num2;
}
 */
// export{add}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

export { add, multiply, subtract as substract };

//reduce

const numbers = [12, 44, 645, 78, 12];
let sum = 0;
for (const num of numbers) {
  sum = sum + num;
}

const reducer = (previous, current) => previous + current;

numbers.reduce(reducer, 0);
