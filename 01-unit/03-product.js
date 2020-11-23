// ==================================================
// DEFINE FUNCTION(S)
// ==================================================

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
  // value as 1. This will help in satisfying
  // the TEST CASE 4.
  if (secondArg === undefined) {
    secondArg = 1;
  }

  // Returning the product of firstArg & secondArg.
  return firstArg * secondArg;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(5, 4);
  if (result !== 20) throw new Error(`Expected product(5, 4) to be 20. Received: ${result}`);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result = product(0, 12);
  if (result !== 0) throw new Error(`Expected product(0,12) to be 0. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = product(8, 5, 3, 1, 7, 13);
  if (result !== 40) throw new Error(`Expected product(8,5,3,1,7,13) to be 40. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = product(12);
  if (result !== 12) throw new Error(`Expected product(12) to be 12. Received: ${result}`);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = product();
  if (result !== 0) throw new Error(`Expected product() to be 0. Received: ${result}`);


  console.log('All tests passed successfully.');
  // ==================================================
  // PRINT ERRORS
  // ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
