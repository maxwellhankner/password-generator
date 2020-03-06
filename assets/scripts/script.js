// Set the generate button to a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask the user for requirements and asign them to variables
  // Ask for the password length
  var passLength = prompt('Password length? (8-128)');
  // If the length is shorter that 8, or longer then 128, ask again
  if (passLength > 128 || passLength < 8){
    alert('Try again, pick a length between 8 and 128.');
    return;
  }
  // Ask if the user would like to include uppercase letters
  var includeUppers = confirm('Include uppercase letter?');
  // Ask if the user would like to include lowercase letters
  var includeLowers = confirm('Include lowercase letter?');
  // Ask if the user would like to include numbers
  var includeNumbers = confirm('Include numbers?');
  // Ask if the user would like to include symbols
  var includeSymbols = confirm('Include symbols?');

  if (includeUppers === false && includeLowers === false && includeSymbols === false && includeNumbers === false) {
    alert('Try again, you must include one type of character.');
    return;
  } 

  // Run the generate password function with the requrements and length as perameters
  var password;

  var passwordGood = true;
  while (passwordGood) {
    password = generatePassword(passLength, includeUppers, includeLowers, includeNumbers, includeSymbols);
    if (password !== 'TRY AGAIN') {
      passwordGood = false;
    }
  }

  // connect the password area to a variable
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
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
  var possibleLowercase = 'abcdefghijklmnopqrstuvwxyz';
  var possibleUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var possibleNumbers = '1234567890';
  var possibleSymbols = '!@#$%^&*(){}[]=<>/,.';

  var hasLower = false;
  var hasUpper = false;
  var hasNumber = false;
  var hasSymbol = false;

  for (var i = 0; i < passLength; i++) {
    for (var x = 0; x < possibleLowercase.length; x++) {
      if (finalPassword[i] === possibleLowercase[x]) {
        hasLower = true;
      }
    }
    for (var x = 0; x < possibleUppercase.length; x++) {
      if (finalPassword[i] === possibleUppercase[x]) {
        hasUpper = true;
      }
    }
    for (var x = 0; x < possibleNumbers.length; x++) {
      if (finalPassword[i] === possibleNumbers[x]) {
        hasNumber = true;
      }
    }
    for (var x = 0; x < possibleSymbols.length; x++) {
      if (finalPassword[i] === possibleSymbols[x]) {
        hasSymbol = true;
      }
    }
  }
  
  // Return the password result
  if(includeUppers === hasUpper && includeLowers === hasLower && includeNumbers === hasNumber && includeSymbols === hasSymbol) {
    return finalPassword;
  }

  // If the password does not meet requirements, then return try again
  return 'TRY AGAIN';
}