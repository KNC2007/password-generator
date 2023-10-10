// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!$%&'()#*+,-./:][;<=>?@/^_`{|}~"


// create the function here
// prompt to get the number of characters in password - click OK
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var userPassword = "";

//   // Ask user for their choice in password length
//   var userPasswordLength = window.prompt("How many characters long should your password be? Enter a number between 8 and 128.");


//   // if click cancel put here // then a CONFIRM pop up screen
//   // what is user leaves it blank or presses cancel**

// // if(userPasswordLength < 8 || userPasswordLength > 128 || typeof userPasswordLength != "number") {
// //     window.alert ("Insert a valid number between 8 and 128.");
// //     return
// //   } 
// //   console.log(userPasswordLength)


  while (true) {
    // Ask user for their choice in password length
    var userPasswordLength = window.prompt("How many characters long should your password be? Enter a number between 8 and 128.");

    // Check if the input is not a number or if it's outside the valid range
    if (isNaN(userPasswordLength) || userPasswordLength < 8 || userPasswordLength > 128) {
      window.alert("Please, insert a valid number between 8 and 128.");
    } else {
      // Valid input, break out of the loop
      break;
    }
  }

  // change to number and not a string
  userPasswordLength = parseInt(userPasswordLength)
 
  
  // need 4 ifs with 4 confirm Expression Conditionals
  var userLowerCase = window.confirm("Do you want your password to include lowercase letters?")
  // if user pressed ok or true or yes
  // if user pressed cancel or false or no
  if(userLowerCase === true) {
    userPassword += lowerCase;
  }

  var userUpperCase = window.confirm("Do you want your password to include uppercase letters?")
   // if user pressed ok or true
  // if user pressed cancel or false
  if(userUpperCase === true) {
    userPassword += upperCase
  }

  var userNumbers = window.confirm("Do you want your password to include numbers?")
   // if user pressed ok or true
  // if user pressed cancel or false
  if(userNumbers === true) {
    userPassword += numbers 
  }

  var userSpecialCharacters = window.confirm("Do you want your password to include special characters?")
   // if user pressed ok or true
  // if user pressed cancel or false
  if(userSpecialCharacters === true) {
    userPassword += specialCharacters
  }
  
  var password = "";
  
  // processing... (randomly generate characters)
  for (var i = 0; i < userPasswordLength; i++) {
    password += userPassword[Math.floor(Math.random() * userPassword.length)]
  }
  // return look up math random code (whatever goes in return will come out the other side on the generator)

// Write password to the #password input
   passwordText.value = password;
   return password

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
