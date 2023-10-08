// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = " !$%&'()#*+,-./:][;<=>?@/^_`{|}~";

var characters = lowerCase[0] + upperCase[0] + numbers[0] + specialCharacters[0]

// create the function here
// prompt to get the number of characters in password - click OK
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Ask user for their choice in password length
  var userPasswordLength = window.prompt("How many characters long should your password be? Enter a number between 8 and 128.");
  // if click cancel put here // then a CONFIRM pop up screen
  // what is user enters number less than 8 and more than 128?!?!?!**
  
  console.log(userPasswordLength)

  var userLowerCase = window.confirm("Do you want your password to include lowercase letters?")
  // if user pressed ok or true
  // if user pressed cancel or false

  var userUpperCase = window.confirm("Do you want your password to include uppercase letters?")
   // if user pressed ok or true
  // if user pressed cancel or false

  var userNumbers = window.confirm("Do you want your password to include numbers?")
   // if user pressed ok or true
  // if user pressed cancel or false

  var userSpecialCharacters = window.confirm("Do you want your password to include special characters?")
   // if user pressed ok or true
  // if user pressed cancel or false


  // need 4 ifs with 4 confirmExpressionConditionals
  if()




  



  // passwordText.value = password;



  
    
      



   function getRandom() {
    return Math.random();
  }
}



  var password = " ";
  for (var i = 0; i<= charactersLength; i++) {
    var password = Math.floor(Math.random() * characters.length)
  }
  return password

console.log(generatePassword)











// processing... (randomly generate characters)
// return password
//   return "turtle"; // if turtle is a password

function generatePassword () {
  // return look up math random code (whatever goes in return will come out the other side on the generator)
}



// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// var numOfApples = prompt("How many apples?")
// numOfApples
// '12'
// numOfApples = parseInt(numOfApples)
// 12