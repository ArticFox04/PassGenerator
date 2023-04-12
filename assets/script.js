// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var emptypass = ''

// Write password to the #password input
function writePassword() {
  emptypass = ''
  generatePass();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = emptypass;
  console.log(emptypass)

}

function validateLength(){
  var tempLength = prompt("How many characters would you like in your password?")
  if(tempLength > 7 && tempLength < 129) {
    return tempLength
  }
  var tryAgain = confirm("Please enter a valid length. Length must be between 8 and 128 characters")
  if(!tryAgain) {
    return false
  }
  return validateLength()

}
function generatePass(){
var passlength = validateLength()

if (!passlength){
  alert('wrong length')
  return
}
var characters = possibilities()

if (!characters){
  alert('error')

} else {
  for(let i = 0; i < passlength; i++){
    var yourpass = Math.floor(Math.random()*characters.length );
    emptypass +=characters.charAt(yourpass)
  }
  console.log(emptypass)
}
}

function possibilities(){
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '0123456789'
  var special = '@#$!&%^*(){}/?~'
  var pass = ''
  var upper = confirm('Uppercase?')
  if(upper){
    pass += uppercase
  }
  var lower = confirm('Lowercase?')
  if(lower){
    pass += lowercase
  }
  var num = confirm('Numbers?')
  if(num){
    pass += numbers
  }
  var spec = confirm('Special characters?')
  if(spec){
    pass += special
  } return pass
  console.log(pass)
 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);