// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== 'TRY AGAIN') {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generator functions
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)]
}


// Password generator
function generatePassword() {
  // Ask the user for requirements and asign them to variables
  var passLength = prompt('Password length?');
  if (passLength > 128 || passLength < 8){
    alert('Try again, pick a length between 8 and 128');
    return 'TRY AGAIN'
  }
  var includeUpper = confirm('Include uppercase letter?');
  var includeLower = confirm('Include lowercase letter?');
  var includeNumbers = confirm('Include numbers?');
  var includeSymbols = confirm('Include symbols?');


  var finalPassword = '';
  

  for (var i = 0; i < passLength; i++) {
    finalPassword += 'h';
  }






  return finalPassword;
}