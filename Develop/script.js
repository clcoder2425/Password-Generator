// Assignment Code

//define steps:
// 1. Prompt user for password criteria:
//    a. Password length between 8 and 128 characters
//    b. Password may include uppercase, lowerCase, numeric and special characters.
// 2. Select password length
// 3. Select which type of charactes to include
// 4. Validate each input
// 5. Display password

//Variables declaration
var passwordLength= 8;
var selectionarr =[];
var upCasearr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCasearr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChararr = ['@','#','$','%','&','!','(',')','?','*','^',];
var numbersarr = ['0','1','2','3','4','5','6','7','8','0'];

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
    var correctinput = getuserinput(); //This should return true or false
    var passwordText = document.querySelector("#password");
if (correctinput){
var newpassword = generatePassword();
  passwordText.value = newpassword;
} else{
    passwordText.value = "";
}

}

// define generatepassword function


function generatePassword() {
  //would generate a password based on user input
var password= "";
var i = passwordLength;
while(i>0){
    var randomCharacter = Math.floor(Math.random()*selectionarr.length);
    password = password + selectionarr[randomCharacter];
    i--;
}
  
  return password;
}
//Prompt user for password length
function getuserinput(){
    selectionarr = [];
    passwordLength = parseInt(prompt("How many characters would you like in your password? (8-128)"))
    if (isNaN(passwordLength) || passwordLength<8|| passwordLength>128){ //Verify that user has enter a number
        alert("password must be between 8 and 128 characters, please try again");
        return false;
       
}
//Confirm which characters user would like in the password
if (confirm("Would you like uppercase letters in your password?")){
    selectionarr = selectionarr.concat(upCasearr);
}
if (confirm("Would you like lowercase letters in your password?")){
    selectionarr = selectionarr.concat(lowerCasearr);
}
if (confirm("Would you like special characters in your password?")){
    selectionarr = selectionarr.concat(specialChararr);
}
if (confirm("Would you like numbers in your password?")){
    selectionarr = selectionarr.concat(numbersarr);
}
return true;
}