//Done by Mohit Shrivastava - Question 3

const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

const result = reversedNum(149);
console.log(result);
