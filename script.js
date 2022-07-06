// // While loop
// while (number < 10) {
//   alert("number is less than 10");
// }

// // For loop
// for (let i = 0; i < 3; i++) {
//   alert("I love you");
// }

// // Conditionals
// if ((gender = "female")) {
//   alert("you are a lady");
// } else if ((gender = "male")) {
//   alert("you are a guy");
// } else {
//   alert("i dont know what you are");
// }

// functions
// function showMessage() {
//   console.log("hi there");
// }

// showMessage();

// // objects
// let user = {};
// user["name"] = "Tallmantek";

// Object to store details
let userDetailsDatabase = {};

function getUserDetails() {
  // Username
  let userName = prompt("Enter your username");
  if (userName == null) {
    return;
  }

  function validateUsername(userName) {
    if (userName.length <= 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  while (validateUsername(userName) == false) {
    userName = prompt("Username must be less than 11 and greater than 0");
  }

  userDetailsDatabase["Username"] = userName;

  //   email address
  let email = prompt("Enter your email address");
  if (email == null) {
    return;
  }

  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }

  while (validateEmail(email) == false) {
    email = prompt("Enter a valid email");
  }

  userDetailsDatabase["Email"] = email;

  //   Phone number
  let phoneNumber = prompt("Enter your phone number");
  if (phoneNumber == null) {
    return;
  }

  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }

  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be 11 digits, try again");
  }

  userDetailsDatabase["Phonenumber"] = phoneNumber;

  //   Password
  let password = prompt("Enter your password");
  if (password == null) {
    return;
  }
  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  while (validatePassword(password) == false) {
    password = prompt("Password must not be less than 6");
  }

  userDetailsDatabase["Password"] = password;

  //   Confirm password
  let confirmPassword = prompt("Confirm your password");
  if (confirmPassword == null) {
    return;
  }
  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }

  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Passwords don't match, try again!");
  }
  userDetailsDatabase["Confirm password"] = confirmPassword;
}

function displayUserDetails() {
  alert(`Your Details\n\n Username: ${userDetailsDatabase.Username}\n
  Phone Number: ${userDetailsDatabase.Phonenumber}\n
  Email: ${userDetailsDatabase.Email}\n`);
}
