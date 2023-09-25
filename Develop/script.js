// Assignment Code
var generateBtn = document.querySelector("#generate");
// 1. Prompt user for password criteria:
//    a. Password length between 8 and 128 characters
//    b. Password may include uppercase, lowerCase, numeric and special characters.
// 2. Select password length
// 3. Select which type of charactes to include
// 4. Validate each input
// 5. Display password

// define generatepassword function
function generatePassword() {
  //notify user of password criteria
alert("your password must be between 8 and 128 characters");
alert("uppercase, lowercase, numbers, special characters");
//Confirm password length
var passwordLength = prompt("Please enter your password length");

if (passwordLength<8|| passwordLength>128){
  alert("password must be between 8 and 128 characters");
  return "incorrect length"
  // prompt("Please enter your password length");
}else if (passwordLength>=8|| passwordLength<=128){
console.log(passwordLength);
alert("you have chosen a valid length");
}
//prompt user to choose password characters
var upCase= prompt("would you like to include uppercase? ");
if (upCase==="yes"){
  var lowerCase= prompt("would you like to include lowercase");

}
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
