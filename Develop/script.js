// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "$", "%", "&", "'", "(", ")", "#", "*", "+", ",", "-", ".", "/", ":", "]", "[", ";", "<", "=", ">", "?", "@", "/", "^", "_", "`", "{", "|", "}", "~"];

var characters = lowerCase[0] + upperCase[0] + numbers[0] + specialCharacters[0];



// create the function here
// prompt to get the number of characters in password - click OK
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 

  var userPassword = " ";

  // Ask user for their choice in password length
  var userPasswordLength = window.prompt("How many characters long should your password be? Enter a number between 8 and 128.");
  // change to number and not string
  userPasswordLength = parseInt(userPasswordLength)
  // if click cancel put here // then a CONFIRM pop up screen
  // what is user enters number less than 8 and more than 128?!?!?! or leaves it blank or presses cancel**
  console.log(userPasswordLength)

  if(userPasswordLength < 8) {
    window.alert ("Insert a number between 8 and 128.")
  }
  return

  if(userPasswordLength > 128) {
    window.alert("Insert a number between 8 and 128.")
  }
  return
  
  // need 4 ifs with 4 confirm Expression Conditionals
  var userLowerCase = window.confirm("Do you want your password to include lowercase letters?")
  // if user pressed ok or true
  // if user pressed cancel or false
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
  
  var password = " ";
  
  for (var i = 0; i <= userPasswordLength; i++) {
    password += userPassword = Math.floor(Math.random() * userPasswordLength.length)
  }
  return password

}

// processing... (randomly generate characters)
// return password
//   return "turtle"; // if turtle is a password


  // return look up math random code (whatever goes in return will come out the other side on the generator)


// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
