// Get the variables from the DOM

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const danger = document.querySelector("#danger");
const success = document.querySelector("#success");

let isFormValid = false;

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
  if (isFormValid) {
    login();
  }
});

function checkInputs() {

  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    setRedFor(username, 'Username cannot be blank');
    return;

  } else {
    setGreenFor(username);
  }

  if (passwordValue === '') {
    setRedFor(password, 'Password cannot be blank');
    return;

  } else {
    setGreenFor(password);
  }

  clearErrors();
  isFormValid = true;
};

function setRedFor(input, message) {

  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';

  danger.style.display = "block";
  success.style.display = "none";
  
};

function setGreenFor(input) {

  const formControl = input.parentElement;
  formControl.className = 'form-control success';

};

// Create a function to delete errors when the login data are correct

function clearErrors() {
  const errors = document.querySelectorAll('form-control error');
  errors.forEach(error => error.remove());
}
// Create log in function to validate the user's credentials -username and password- and check if is stored in localStorage

function login() {

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  const userDB = localStorage.getItem(usernameValue);
  !userDB ? setRedFor(username, 'Username does not exist! At least 6 characters long') : checkPassword();

  function checkPassword() {

    // parse user data from JSON to Obj to be stored in localStorage
    const user = JSON.parse(userDB);
    user.password === passwordValue ? loginSuccess() : setRedFor(password, 'Password is incorrect! At least 6 characters long');

  }
        
};

function loginSuccess() {

    success.style.display = "block";
    danger.style.display = "none";

    const userData = {
    username: username.value.trim(),
    loggedIn: true,
    loggedInDate: new Date()
  };

  localStorage.setItem('loggedIn', JSON.stringify(userData));
  
  // Set a function to redirect after 2 seconds
  setTimeout(() => {
    window.location.href = "../dashboard/dashboard.html";
  }, 2000);

  
};