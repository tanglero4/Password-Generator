// Assignment Code
var generateBtn = document.querySelector("#generate");
//Assugn variables

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Sz"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "_", "/", ".", ",", "'", ";", ":", "[","]","{", "}", "?", "<", ">", "|",]
// Write password to the #password input

//start the function


function generatePassword() {
 var addOptions = []
  var finalPassword = ""
  var passwordLength = prompt ("How long do you want your password to be? ")

  if (passwordLength <= 8 && passwordLength >= 128) {
  
     alert ("Please choose a number between 8 and 128 characters.")
     generatePassword();
     
    } else{
  var wantSpecial = confirm(`Do you want special characters?`)
  var wantLowerCase = confirm(`Do you want lower case letters?`)
  var wantUpperCase = confirm(`Do you want upper case letters?`)
  var wantNumbers = confirm(`Do you want numbers?`)
  


if (wantSpecial) {
  addOptions = addOptions.concat(specialChar)

}
if (wantLowerCase) {
  addOptions = addOptions.concat(lowerCase)

}
if (wantUpperCase) {
  addOptions = addOptions.concat(upperCase)

}
}
generatePassword();



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
