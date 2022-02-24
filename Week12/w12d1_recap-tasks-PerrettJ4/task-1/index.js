//Use recursion to calculate the exponential value here (e.g. calculateExponent(4,1) === 4, calculateExponent(4,2) === 16, calculateExponent(4,3) === 64):

function calculateExponent(baseNum, exponent) {
  return exponent <= 1
    ? exponent > 0
      ? baseNum
      : 1
    : baseNum * calculateExponent(baseNum, exponent - 1);
}

module.exports = { calculateExponent };

console.log(calculateExponent(2, 3));
