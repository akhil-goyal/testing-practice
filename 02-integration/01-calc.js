// ==================================================
// DEFINE FUNCTION(S)
// ==================================================

// ------------------ Function SUM -------------------

// Declaring the function sum(). It takes
// two arguments : firstArg & secondArg.
function sum(firstArg, secondArg) {

  // If firstArg is not received in the
  // function as an argument, setting its
  // value as 0.
  if (firstArg === undefined) {
    firstArg = 0;
  }

  // If secondArg is not received in the
  // function as an argument, setting its
  // value as 0.
  if (secondArg === undefined) {
    secondArg = 0;
  }

  // Returning the sum of firstArg & secondArg.
  return firstArg + secondArg;

}
// ---------------------------------------------------

// -------------- Function DIFFERENCE ----------------

// Declaring the function difference(). It takes
// two arguments : firstArg & secondArg.
function difference(firstArg, secondArg) {

  // If firstArg is not received in the
  // function as an argument, setting its
  // value as 0.
  if (firstArg === undefined) {
    firstArg = 0;
  }

  // If secondArg is not received in the
  // function as an argument, setting its
  // value as 0.
  if (secondArg === undefined) {
    secondArg = 0;
  }

  // Returning the difference of firstArg & secondArg.
  return firstArg - secondArg;
}
// ---------------------------------------------------

// ---------------- Function PRODUCT -----------------

// Declaring the function product(). It takes
// two arguments : firstArg & secondArg.
function product(firstArg, secondArg) {

  // If firstArg is not received in the
  // function as an argument, setting its
  // value as 0.
  if (firstArg === undefined) {
    firstArg = 0;
  }

  // If secondArg is not received in the
  // function as an argument, setting its
  // value as 1.
  if (secondArg === undefined) {
    secondArg = 1;
  }

  // Returning the product of firstArg & secondArg.
  return firstArg * secondArg;
}
// ---------------------------------------------------

// --------------- Function QUOTIENT -----------------

// Declaring the function quotient(). It takes
// two arguments : firstArg & secondArg.
function quotient(firstArg, secondArg) {

  // If firstArg is not received in the
  // function as an argument, setting its
  // value as 0.
  if (firstArg === undefined) {
    firstArg = 0;
  }

  // If secondArg is not received in the
  // function as an argument, setting its
  // value as 1.
  if (secondArg === undefined) {
    secondArg = 1;
  }

  // If the value of secondArg is 0, returning
  // the "ERROR" string.
  if (secondArg === 0) {
    return "ERROR";
  }

  // Returning the quotient of firstArg & secondArg.
  return firstArg / secondArg;

}
// ---------------------------------------------------

// ----------------- Function CALC -------------------

// Declaring the function calc(). It takes three
// arguments : calculation, firstNumber & secondNumber.
function calc(calculation, firstNumber, secondNumber) {

  // Using SWITCH cases to determine which calculation
  // user wants to perform & call the function accordingly.
  switch (calculation) {
    case 'add': return sum(firstNumber, secondNumber);
    case 'subtract': return difference(firstNumber, secondNumber);
    case 'multiply': return product(firstNumber, secondNumber);
    case 'divide': return quotient(firstNumber, secondNumber);
    default: return "Operation not supported."
  }
}
// ---------------------------------------------------


// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc('add', 1, 1);
  if (result !== 2) throw new Error(`Expected calc("add", 1, 1) to be 2. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
  var result = calc('subtract', 20, 10);
  if (result !== 10) throw new Error(`Expected calc("subtract", 20, 10) to be 10. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.
  var result = calc('multiply', 9, 9);
  if (result !== 81) throw new Error(`Expected calc("multiply", 9, 9) to be 81. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.
  var result = calc('divide', 9, 3);
  if (result !== 3) throw new Error(`Expected calc("divide", 9, 3) to be 3. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.
  var result = calc('exponent', 2, 8);
  if (result !== 'Operation not supported.') throw new Error(`Expected calc("exponent", 2, 8) to be 'Operation not supported.'. Received: ${result}`);


  console.log('All tests passed successfully.');
  // ==================================================
  // PRINT ERRORS
  // ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
