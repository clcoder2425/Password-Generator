// Assignment Code
//Variables declaration
var passwordLength= 8;
var selectionarr =[];
var upCasearr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCasearr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChararr = ['@','#','$','%','&','!','(',')','?','*','^',];
var numbersarr = ['0','1','2','3','4','5','6','7','8','0'];

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
alert("Password must be between 8 and 128 characters");
alert("May contain uppercase, lowercase, numbers and special characters");
//Confirm password length
var passwordLength = prompt("How many characters would you like for your password");

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
  upCase=[A,B,C,D,E,F,G,HIJKLMNOPQRSTUVWXYZ]
  var lowerCase= prompt("would you like to include lowercase");
  if (lowerCase==="yes"){
    var specialchar=prompt("Would like to include special characters?");
    if(specialchar==="yes"){
      var numbers=prompt("Would like to include numbers?");
      if(numbers==="yes"){

      }
    }
  }
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
