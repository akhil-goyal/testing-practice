// ==================================================
// DEFINE FUNCTION(S)
// ==================================================

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
  // value as 1. This will help in satisfying
  // the TEST CASE 4.
  if (secondArg === undefined) {
    secondArg = 1;
  }

  // If the value of secondArg is 0, returning
  // the "ERROR" string. This will help in
  // satisfying the TEST CASE 2.
  if (secondArg === 0) {
    return "ERROR";
  }

  return firstArg / secondArg;

}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(24, 6);
  if (result !== 4) throw new Error(`Expected quotient(24, 6) to be 4. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  var result = quotient(15, 0);
  if (result !== 'ERROR') throw new Error(`Expected quotient(15,0) to be ERROR. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(18, 3, 12, 4, 21);
  if (result !== 6) throw new Error(`Expected quotient(18,3,12,4,21) to be 6. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(24);
  if (result !== 24) throw new Error(`Expected quotient(24) to be 24. Received: ${{ result }}`);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = quotient();
  if (result !== 0) throw new Error(`Expected quotient() to be 0. Expected: ${result}`);


  console.log('All tests passed successfully.');
  // ==================================================
  // PRINT ERRORS
  // ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
