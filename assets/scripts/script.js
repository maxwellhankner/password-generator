// Set the generate button to a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask the user for requirements and asign them to variables
  // Ask for the password length
  var passLength = prompt('Password length?');
  // If the length is shorter that 8, or longer then 128, ask again
  if (passLength > 128 || passLength < 8){
    alert('Try again, pick a length between 8 and 128');
    return 'TRY AGAIN'
  }
  // Ask if the user would like to include uppercase letters
  var includeUppers = confirm('Include uppercase letter?');
  // Ask if the user would like to include lowercase letters
  var includeLowers = confirm('Include lowercase letter?');
  // Ask if the user would like to include numbers
  var includeNumbers = confirm('Include numbers?');
  // Ask if the user would like to include symbols
  var includeSymbols = confirm('Include symbols?');

  // Run the generate password function with the requrements and length as perameters
  var password = generatePassword(passLength, includeUppers, includeLowers, includeNumbers, includeSymbols);
  // connect the password area to a variable
  var passwordText = document.querySelector("#password");

  // If the password response is not valid, do not change the passwords value
  if (password !== 'TRY AGAIN') {
    passwordText.value = password;
  }
}

// Add event listener to generate button, when it is clicked, run the writePassword function
generateBtn.addEventListener("click", writePassword);

// Generator functions
// Generate a random lowercase character
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Generate a random uppercase character
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Generate a random number character
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Generate a symbol character
function randomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)]
}


// Password generator
function generatePassword(passLength, includeUppers, includeLowers, includeNumbers, includeSymbols) {

  // Create a variable for the final password
  var finalPassword = '';

  // Create an array of the generating character functions that the user required
  var requiredFunctions = []
  // Iclude the randomUpper function
  if (includeUppers) {
    requiredFunctions.push(randomUpper);
  }
  // Iclude the randomLower function
  if (includeLowers) {
    requiredFunctions.push(randomLower);
  }
  // Iclude the randomBumber function
  if (includeNumbers) {
    requiredFunctions.push(randomNumber);
  }
  // Iclude the randomSymbol function
  if (includeSymbols) {
    requiredFunctions.push(randomSymbol);
  }

  // Generate the desired amount of random characters by running the character generator functions randomy
  for (var i = 0; i < passLength; i++) {
    // Get a random number between 0 and 3
    var randomFunctionIndex = Math.floor(Math.random() * requiredFunctions.length);
    // Get a random character
    var currentChar = requiredFunctions[randomFunctionIndex]();
    // Add the character to the password result
    finalPassword += currentChar;
  }

  // Check to see if at least one of each character type was generated in the result



  // Return the result
  return finalPassword;
}