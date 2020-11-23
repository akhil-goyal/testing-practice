// ==================================================
// DEFINE FUNCTION(S)
// ==================================================

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

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the difference of two numbers.
  var result = difference(5, 2);
  if (result !== 3) throw new Error(`Expected difference(1, 1) to be 3. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = difference(1, 3, 5, 7, 9);
  if (result !== -2) throw new Error(`Expected difference(1,3,5,7,9) to be -2. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = difference(7);
  if (result !== 7) throw new Error(`Expected difference(7) to be 7. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = difference();
  if (result !== 0) throw new Error(`Expected difference() to be 0. Received: ${result}`);


  console.log('All tests passed successfully.');
  // ==================================================
  // PRINT ERRORS
  // ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
