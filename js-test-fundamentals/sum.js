// const num1 = 5;
// const num2 = 10;

// const sum = num1 + num2;

// console.log(sum);

const sum = (a, b) => {
  const param1 = typeof a;
  const param2 = typeof b;

  if (param1 === "object") {
    return "Error";
  }

  if (param2 === "object") {
    return "Error";
  }

  return parseInt(a) + parseInt(b);
};

module.exports = sum;
