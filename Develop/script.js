// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialcharacterList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var chosenCharacter = [];

//Generate Password Button
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomInt = Math.floor(Math.random() * chosenCharacter.length);
    password = password + chosenCharacter[randomInt];
  }
  return password; 
}

//Prompt to type between 8 to 128 characters
function getPrompts() {
  chosenCharacter = [];

  passwordLength = parseInt(prompt("How many characters you want your password to be? Please type between 8 to 128 characters. "));

  // If entry was invalid.
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Invalid Entry! Please enter between 8 and 128 characters. Please try again. ");
    return false;
  }

  // Confirmation of which characters will be selected. If selected, an alert of "name of the characters" has been selected will appear".
  if (confirm("Would you like lowercase characters in your password?")) {
    chosenCharacter = chosenCharacter.concat(lowercaseList);
    alert("Lower case characters has been selected.");
  }
  if (confirm("Would you like uppercase characters in your password?")) {
    chosenCharacter = chosenCharacter.concat(uppercaseList);
    alert("Upper case characters has been selected.");
  }
  if (confirm("Would you like special characters in your password?")) {
    chosenCharacter = chosenCharacter.concat(specialcharacterList);
    alert("Special characters has been selected.");
  }
  if (confirm("Would you like numbers in your password?")) {
    chosenCharacter = chosenCharacter.concat(numberList);
    alert("Number has been selected.")
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var createdPassword = generatePassword();
    
    passwordText.value = createdPassword;
  } 
    else {
      passwordText.value = "";
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);