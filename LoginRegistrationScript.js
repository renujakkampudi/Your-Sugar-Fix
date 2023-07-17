function registration_validation() {
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var password = document.getElementById("Password").value;

  var name_regex = /^[a-zA-Z ]+$/;
  var email_regex = /\S+@\S+\.\S+/;
  var password_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!name || !name_regex.test(name)) {
    document.getElementById("err3").innerHTML = "Please enter a valid name";
    return false;
  } else {
    document.getElementById("err3").innerHTML = "";
  }

  if (!email || !email_regex.test(email)) {
    document.getElementById("err4").innerHTML =
      "Please enter a valid email address";
    return false;
  } else {
    document.getElementById("err4").innerHTML = "";
  }

  if (!password || !password_regex.test(password)) {
    document.getElementById("err5").innerHTML =
      "Please enter a valid password (at least 8 characters long, containing at least one digit and one special character, and not containing your username)";
    return false;
  } else if (password.toLowerCase().includes(name.toLowerCase())) {
    document.getElementById("err5").innerHTML =
      "Password should not contain your username";
    return false;
  } else {
    document.getElementById("err5").innerHTML = "";
  }

  return true;
}

function Login_validation() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var email_regex = /\S+@\S+\.\S+/;

  if (!email || !email_regex.test(email)) {
    document.getElementById("err1").innerHTML =
      "Please enter a valid email address";
    return false;
  } else {
    document.getElementById("err1").innerHTML = "";
  }

  if (!password) {
    document.getElementById("err2").innerHTML = "Please enter a password";
    return false;
  } else {
    document.getElementById("err2").innerHTML = "";
  }

  return true;
}
