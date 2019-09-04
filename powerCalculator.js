// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

function powerCalc(integer, exp) {
  if (exp < 0) {
    console.log('Use only exponents greater than or equal to 0');
    return;
  }
  if (exp === 0) {
    return 1;
  }

  return integer * powerCalc(integer, exp - 1)
}

powerCalc(10, 3)

