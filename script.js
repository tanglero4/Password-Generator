// Assignment Code
var generateBtn = document.querySelector("#generate");
//Assugn variables

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Sz"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "_", "/", ".", ",", "'", ";", ":", "[","]","{", "}", "?", "<", ">", "|",]


var upperCaseQuestion = window.prompt(`Do you want upper case letters?`);
var lowerCaseQuestion = window.prompt(`Do you want lower case letters?`);
var numbersQuestion = window.prompt(`Do you want numbers?`);
var specialCharactersQuestion = window.prompt(`Do you want special characters?`);

// Write password to the #password input

//start the function


function generatePassword() {
 var addonOptions = []
  var finalPassword = ""
  var passwordLength = prompt ("How long do you want your password to be? ")

  if (passwordLength <= 8 && passwordLength >= 128) {
  
     alert ("Please choose a number between 8 and 128 characters.")
     generatePassword();
     
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
