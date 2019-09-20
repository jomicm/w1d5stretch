
const maxProfit = function(input) {
  let maxProf = -1;
  if (input.length > 2) {
    // Divide
    // While splitting using splice, theres is no need to look for the second half since input becomes the second half
    let fh = input.splice(0, Math.ceil(input.length / 2));
    let dif = Math.max(...input) - Math.min(...fh);
    // Update
    maxProf = maxProfit > dif ? maxProfit : dif;
    // Conquer
    maxProfit(fh);
    maxProfit(input);
    return '\nThe max profit is: ' + maxProf + '\n';
  }
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([200, 500, 1000, 700, 30, 400, 900, 400, 50]));