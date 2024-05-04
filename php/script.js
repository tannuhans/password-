// const signUpButton=document.getElementById('signUpButton');
// const signInButton=document.getElementById('signInButton');
// const signInForm=document.getElementById('signIn');
// const signUpForm=document.getElementById('signup');

// signUpButton.addEventListener('click',function(){
//     signInForm.style.display="none";
//     signUpForm.style.display="block";
// })
// signInButton.addEventListener('click', function(){
//     signInForm.style.display="block";
//     signUpForm.style.display="none";
// })

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})


function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";
  
    navbar.classList.toggle(responsive_class_name);
  }

  function generatePassword() {
    var passwordField = document.getElementById("password");
    var length = 12; // You can adjust the length of the password
    var password = "";

    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|?><";
    for (var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * charset.length);
        password += charset[charIndex];
    }

    passwordField.value = password;
}

function checkPassword() {
  var password = document.getElementById("passwordToCheck").value;
  var strengthMeter = document.getElementById("strengthMeter");

  // Calculate password strength (example)
  var strength = password.length * 10;

  // Update meter width
  strengthMeter.style.width = strength + "px";
}

function checkPassword() {
  var username = document.getElementById('usernameInput').value;
  var password = document.getElementById('passwordInput').value;
  var similarity = calculateSimilarity(username, password);

  var resultDiv = document.getElementById('result');
  
  if (similarity === 100 || checkUnsafeConditions(username, password)) {
    resultDiv.innerText = "Really unsafe password!";
  } else if (similarity >= 60) {
    resultDiv.innerText = "You can really do better.";
  } else if (similarity >= 45) {
    resultDiv.innerText = "Medium, try using special characters.";
  } else if (similarity >= 30) {
    resultDiv.innerText = "Strong, but avoid using the username.";
  } else {
    resultDiv.innerText = "Strong";
  }
}

function calculateSimilarity(username, password) {
  var maxLength = Math.max(username.length, password.length);
  var commonCount = 0;

  for (var i = 0; i < maxLength; i++) {
    if (username[i] && password[i] && username[i] === password[i]) {
      commonCount++;
    }
  }

  return Math.floor((commonCount / maxLength) * 100);
}

function checkUnsafeConditions(username, password) {
  // Check if password is same as username
  if (password === username) {
    return true;
  }

  // Check if password matches username 75% or more
  var similarityPercentage = calculateSimilarity(username, password);
  if (similarityPercentage >= 75) {
    return true;
  }

  // Check if password has same letter or number consecutively for more than twice in a row
  for (var i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      return true;
    }
  }

  // Check if password has same letter or number consecutively for more than four times anywhere
  for (var i = 0; i < password.length - 4; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2] && password[i] === password[i + 3] && password[i] === password[i + 4]) {
      return true;
    }
  }

  return false;
}

