// Set the generate button to a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask the user for requirements and asign them to variables
  // Ask for the password length
  var passLength = prompt('Password length? (8-128)');
  // If the length is shorter that 8, or longer then 128, on not a number, ask again
  if (passLength > 128 || passLength < 8 || typeof passLength !== 'number'){
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
  // Check to see the user included at least one type of symbol
  if (includeUppers === false && includeLowers === false && includeSymbols === false && includeNumbers === false) {
    alert('Try again, you must include one type of character.');
    return;
  } 
  // Create password variable
  var password;
  // Create password is a verified password variable
  var passwordGood = true;
  while (passwordGood) {
    // Generate a password and set it to the password variable
    password = generatePassword(passLength, includeUppers, includeLowers, includeNumbers, includeSymbols);
    // If the password is good, then break the loop, if not, generate another one
    if (password !== 'TRY AGAIN') {
      passwordGood = false;
    }
  }
  // connect the password area to a variable
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add an event listener to the generate button, when it is clicked, run the writePassword function
generateBtn.addEventListener("click", writePassword);

// Random character generator functions
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
// Generate a random symbol character
function randomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Password generator function
function generatePassword(passLength, includeUppers, includeLowers, includeNumbers, includeSymbols) {
  // Create a variable for the final password
  var finalPassword = '';
  // Create an array of the random character generator functions that the user required
  var requiredFunctions = []
  // Include the randomUpper function to the array
  if (includeUppers) {
    requiredFunctions.push(randomUpper);
  }
  // Include the randomLower function to the array
  if (includeLowers) {
    requiredFunctions.push(randomLower);
  }
  // Include the randomBumber function to the array
  if (includeNumbers) {
    requiredFunctions.push(randomNumber);
  }
  // Include the randomSymbol function to the array
  if (includeSymbols) {
    requiredFunctions.push(randomSymbol);
  }

  // Generate the desired amount of random characters by running the character generator functions randomy
  // Note: there is a chance that a required character generator doesnt get used, so we just run this whole thing again in the writePassword function
  for (var i = 0; i < passLength; i++) {
    // Get a random number between 0 and 3
    var randomFunctionIndex = Math.floor(Math.random() * requiredFunctions.length);
    // Get a random character
    var currentChar = requiredFunctions[randomFunctionIndex]();
    // Add the character to the password result
    finalPassword += currentChar;
  }

  // Check to see if at least one of each character type was generated in the result
  // Strings for all the possible characters seperated by type
  var possibleLowercase = 'abcdefghijklmnopqrstuvwxyz';
  var possibleUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var possibleNumbers = '1234567890';
  var possibleSymbols = '!@#$%^&*(){}[]=<>/,.';

  // Create boolean variables for each type of character
  var hasLower = false;
  var hasUpper = false;
  var hasNumber = false;
  var hasSymbol = false;

  // Loop every character of our generated password and check if it matches the possible required types
  for (var i = 0; i < passLength; i++) {
    for (var x = 0; x < possibleLowercase.length; x++) {
      if (finalPassword[i] === possibleLowercase[x]) {
        // If the current character matches any lowercase character, change hasLower to true
        hasLower = true;
      }
    }
    for (var x = 0; x < possibleUppercase.length; x++) {
      if (finalPassword[i] === possibleUppercase[x]) {
        // If the current character matches any uppercase character, change hasUpper to true
        hasUpper = true;
      }
    }
    for (var x = 0; x < possibleNumbers.length; x++) {
      if (finalPassword[i] === possibleNumbers[x]) {
        // If the current character matches any number character, change hasNumber to true
        hasNumber = true;
      }
    }
    for (var x = 0; x < possibleSymbols.length; x++) {
      if (finalPassword[i] === possibleSymbols[x]) {
        // If the current character matches any symbol character, change hasSymbol to true
        hasSymbol = true;
      }
    }
  }
  
  // Return the password result if all requirements are met
  if (includeUppers === hasUpper && includeLowers === hasLower && includeNumbers === hasNumber && includeSymbols === hasSymbol) {
    return finalPassword;
  }

  // If the password does not meet requirements, then return 'try again'
  return 'TRY AGAIN';
}