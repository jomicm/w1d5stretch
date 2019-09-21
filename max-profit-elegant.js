
const maxProfit = function(input) {
  let maxProf = -1;
  if (input.length > 1) {
    let fh = input.splice(0, Math.floor(input.length / 2));
    let dif = Math.max(...input) - Math.min(...fh);
    maxProf = maxProf > dif ? maxProf : dif;
    return Math.max(maxProf, maxProfit(fh), maxProfit(input));
  } else  return -1;
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11, 1, 99]));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([200, 500, 1000, 700, 30, 400, 900, 400, 50]));