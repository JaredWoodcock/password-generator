// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(lowercase, uppercase, numbers, specialCharacters, length) {
  // this is the characters the password will use if no other options are selected
  var charset = "";
  // these are the options the user can choose from to include in their password
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) charset += "0123456789";
  if (specialCharacters) charset += "!@#$%^&*()";

  var password = "";
  // this is a for loop that generates each character of the password
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}


function writePassword() {
  var passwordText = document.querySelector("#password");
  // The following code is the window prompts/confirms for the user to select for their password
  var lowercase = window.confirm("Do you want lowercase letters in your password?");
  var uppercase = window.confirm("Do you want uppercase letters in your password?");
  var numbers = window.confirm("Do you want numbers in your password?");
  var specialCharacters = window.confirm("Do you want special characters in your password?");
  var passwordLength = window.prompt("Enter your desired length of the password");

  // the below if statement will give an error alert if the user enters in anything outside the 8-128 range or something that's not a number, and will also throw an error if none of the character types are selected
  if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength))) {
    alert("Please enter a number between 8 and 128");
  } else if (!lowercase && !uppercase && !numbers && !specialCharacters) {
    alert("Please select at least one type of character to include in your password");
  } else { 
    var password = generatePassword(lowercase, uppercase, numbers, specialCharacters, parseInt(passwordLength));
  } 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
