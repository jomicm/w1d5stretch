const args = process.argv.slice(2);

const getBottles = function(bottles) {
  let originalBottles = bottles;
  bottles = Number(bottles);
  let availableBottles = 0, availableCaps = 0, totalBottles = bottles, remainingBottles = bottles, remainingCaps = bottles;
  while (remainingBottles >= 2 || remainingCaps >= 4)  {
    availableBottles += bottles;
    availableCaps += bottles;
    bottles = Math.floor(availableBottles / 2) + Math.floor(availableCaps / 4);
    totalBottles += bottles;
    availableBottles = availableBottles % 2;
    availableCaps = availableCaps % 4;
    remainingBottles = bottles + availableBottles;
    remainingCaps = bottles + availableCaps;
  }
  return `TOTAL BOTTLES: ${originalBottles} \nREMAINING BOTTLES: ${remainingBottles} \nREMAINIG CAPS: ${remainingCaps} \nTOTAL EARNED: \n\tBOTTLES: ${totalBottles} \n\tCAPS: ${availableCaps}`;
};

console.log(getBottles(args));