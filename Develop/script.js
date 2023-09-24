// Assignment Code
var generateBtn = document.querySelector("#generate");
// 1. Prompt user for password criteria:
//    a. Password length between 8 and 128 characters
//    b. Password may include uppercase, lowerCase, numeric and special characters.
// 2. Select password length
// 3. Select which type of charactes to include
// 4. Validate each input
// 5. Display password
function generatePassword() {
  
  var newpass ="test";
  return newpass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
