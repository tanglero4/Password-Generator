// Assignment Code
var generateBtn = document.querySelector("#generate");
//Assign variables

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Sz"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "_", "/", ".", ",", "'", ";", ":", "[","]","{", "}", "?", "<", ">", "|",]

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//start the function

function generatePassword() {
 var addOnOptions = []
  var finalPassword = ""
  var passwordLength = prompt ("How long do you want your password to be? ")

  if (passwordLength < 8 || passwordLength > 128) {
  
     alert ("Please choose a number between 8 and 128 characters.")
     generatePassword();

    } else{
  var wantSpecial = confirm(`Do you want special characters?`)
  var wantLowerCase = confirm(`Do you want lower case letters?`)
  var wantUpperCase = confirm(`Do you want upper case letters?`)
  var wantNumbers = confirm(`Do you want numbers?`)

if (wantSpecial) {
  addOnOptions = addOnOptions.concat(specialChar)

}
if (wantLowerCase) {
  addOnOptions = addOnOptions.concat(lowerCase)

}
if (wantUpperCase) {
  addOnOptions = addOnOptions.concat(upperCase)

}
if (wantNumbers) {
  addOnOptions = addOnOptions.concat(numbers)

}
if (wantSpecial == false && wantLowerCase == false && wantUpperCase == false && wantNumbers == false){
  alert ("Please choose at least one type of character for your password")

} 
// randomize password based on user selections
if (passwordLength >= 8 && passwordLength <= 128) {
    for(var i=0; i < passwordLength; i++) {
      randomPassword = Math.floor(Math.random() * addOnOptions.length);
      finalPassword += addOnOptions[randomPassword]
    }
  }
}
// Adds password to password text area
document.getElementById("password").innerHTML = finalPassword
}


