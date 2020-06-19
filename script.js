// Write password to the #password input
//actual logic for password generator
function getNumber(min,max){
  return Math.floor(Math.random() * (max - min) ) + min;
}

function generatePassword(length) {
  var arr = [];
  var counter = 0;
  //Upper Case
  for(var i = 0; i < length; i++)
    arr[counter++] = String.fromCharCode(getNumber(65,90));
  //Lower Case
  for(var i = 0; i < length; i++)
    arr[counter++] = String.fromCharCode(getNumber(97,122));
  //Number
  for(var i = 0; i < 2; i++)
    arr[counter++] = String.fromCharCode(getNumber(48,57));
  //Special Character
  for(var i = 0; i < 2; i++)
    arr[counter++] = String.fromCharCode(getNumber(33,47));
  return arr.join('');
}

function writePassword() {
  //
  var lengthOfPassword = prompt("Enter the length of the number between 8-128 character:");
  var upperCase = confirm ("Do you want uppercase letter?");
  var lowerCase = confirm ("Do you want lowercase letter?");
  var number = confirm ("Do you want number to include in your password?");
  var specialChar = confirm ("Do you want specialChar in your password?o");
  var length_value= parseInt(lengthOfPassword,10);
  document.querySelector("#password").textContent="";
  if (isNaN(length_value) || length_value < 8 || length_value > 128) {
   alert("Invalid number entered");
  }
  else if (upperCase || lowerCase || number || specialChar){    
    document.querySelector("#password").textContent= generatePassword(length_value) ;
  }
  else
  {
    alert("requirement not met");
  } 
}


var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

