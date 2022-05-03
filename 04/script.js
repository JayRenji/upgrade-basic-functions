console.log("Working");

const sum = (arr) => {
  // sum
  const reducer = (total, currentValue) => total + currentValue;
  const sum = arr.reduce(reducer);

  // length
  // divide sum length
  average = sum / arr.length;
  return average;
};

sum([12, 21, 38, 5, 45, 37, 6,]);
console.log(average);
