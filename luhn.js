const test = '79927398713';

const check = number => {
  const numberArray = number.split('').map(n => Number(n));
  const checkDigit = numberArray.splice(-1);
  const numberArrayDoubled = numberArray.reverse().map((n, index) => index % 2 === 0 ? n * 2 : n);
  const nummberArrayChecked = numberArrayDoubled.map((n, index) => index % 2 === 0 && n  > 9 ? n  - 9 : n);
  nummberArrayChecked.reverse().push(checkDigit[0]);
  return nummberArrayChecked.reduce((acu, n) => acu + n) % 10 === 0;
};

console.log(check(test));
console.log(check('49927398716'));
console.log(check('49927398717'));
console.log(check('1234567812345678'));
console.log(check('5277934814907007'));
console.log(check('6011244494730821'));
console.log(check('349855482917058'));
console.log(check('4135903017488219'));
