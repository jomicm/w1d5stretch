
const maxProfit = function(input) {
  let maxProfit = -1;
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      let localProfit = input[j] - input[i];
      maxProfit = localProfit > maxProfit && localProfit !== 0 ? localProfit : maxProfit;
    }
  }
  return 'Max profit is ' + maxProfit;
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([200, 500, 1000, 700, 30, 400, 900, 400, 50]));