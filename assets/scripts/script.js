// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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

// Random function
const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};

// Password requirements
var passLength
var includeUpper
var includeLower
var includeNumbers
var includeSymbols



// Password generator
function generatePassword() {
  // Ask the user for requirements
  passLength = prompt('Password length?');
  includeUpper = confirm('Include uppercase letter?');
  includeLower = confirm('Include lowercase letter?');
  includeNumbers = confirm('Include numbers?');
  includeSymbols = confirm('Include symbols?');


  console.log(passLength, includeUpper, includeLower, includeNumbers, includeSymbols);


  return '123';
}