// Write password to the #password input
//actual logic for password generator
function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generatePassword(length, upperCase, lowerCase, number, specialChar) {
  var arr = [];
  var counter = 0;
  var requirementCount = 0;
  if (upperCase)
    requirementCount++;
  if (lowerCase)
    requirementCount++;
  if (number)
    requirementCount++;
  if (specialChar)
    requirementCount++;

  var requirementLength = length / requirementCount;

  while (counter < length) {
    //Upper Case
    if (upperCase) {
      for (var i = 0; i < requirementLength && counter < length; i++)
        arr[counter++] = String.fromCharCode(getNumber(65, 90));
    }
    //Number
    if (number) {
      for (var i = 0; i < requirementLength && counter < length; i++)
        arr[counter++] = String.fromCharCode(getNumber(48, 57));
    }
    //Special character
    if (specialChar) {
      for (var i = 0; i < requirementLength && counter < length; i++)
        arr[counter++] = String.fromCharCode(getNumber(33, 47));
    }
    //Lower Case
    if (lowerCase) {
      for (var i = 0; i < requirementLength && counter < length; i++)
        arr[counter++] = String.fromCharCode(getNumber(97, 122));
    }
  }

  return arr.join('');
}

function writePassword() {
  //
  var lengthOfPassword = prompt("Enter the length of the number between 8-128 character:");
  var upperCase = confirm("Do you want uppercase letter?");
  var lowerCase = confirm("Do you want lowercase letter?");
  var number = confirm("Do you want number to include in your password?");
  var specialChar = confirm("Do you want specialChar in your password?o");
  var length = parseInt(lengthOfPassword, 10);
  document.querySelector("#password").textContent = "";
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid number entered");
  }
  else if (upperCase || lowerCase || number || specialChar) {
    document.querySelector("#password").textContent = generatePassword(length, upperCase, lowerCase, number, specialChar);
  }
  else {
    alert("requirement not met");
  }
}


var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

