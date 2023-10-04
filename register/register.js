// Initialize the variables from the DOM

const form = document.getElementById("register");
const username = document.getElementById("username");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const secondPassword = document.getElementById("password2nd");
const registrationBtn = document.getElementById("submit");
const danger = document.getElementById("danger");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRegisterInfo();
});

function checkRegisterInfo() {
  // get the values from the inputs and use trim to remove the white spaces
  
  const usernameValue = username.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const ageValue = age.value.trim();
  const passwordValue = password.value.trim();
  const secondPasswordValue = secondPassword.value.trim();

  // Check the input values and show the error/successful messages

  let validationInfo = [];

  if (usernameValue === '') {

    setRedFor(username, 'username field cannot be empty');
    validationInfo.push('false');

    } else if (usernameValue.length < 6) {

      setRedFor(username, 'username is too short at least 6 characters long. Must contain letters,numbers and a special character');
      validationInfo.push('false');
      
    } else {
  
    setGreenFor(username);
    validationInfo.push('true');

    }

  if (firstNameValue === '') {

  setRedFor(firstName, 'First Name field cannot be empty');
  validationInfo.push('false');

  } else if (firstNameValue.length < 2) {

    setRedFor(firstName, 'First Name must include at least 2 letters');
    validationInfo.push('false');
  
  } else {

  setGreenFor(firstName);
  validationInfo.push('true');
  }

  if (lastNameValue === '') {

    setRedFor(lastName, 'Last Name field cannot be empty');
    validationInfo.push('false');

  } else if (lastNameValue.length < 2) {

    setRedFor(lastName, 'Last Name must include at least 2 letters');
    validationInfo.push('false');
  
  } else {

    setGreenFor(lastName);
    validationInfo.push('true');
  }

  if (emailValue === '') {

    setRedFor(email, 'Email field cannot be empty');
    validationInfo.push('false');

  } else if (!existEmail(emailValue)) {

    setRedFor(email, 'Provide a valid email');
    validationInfo.push('false');

  } else {

    setGreenFor(email);
    validationInfo.push('true');

  }

  if (ageValue === '') {

    setRedFor(age, ' Age field cannot be empty');
    validationInfo.push('false');

  } else if (ageValue < 18 || ageValue > 65)  {
    
    setRedFor(age, 'Allowed age is between 18 - 65 years');
    validationInfo.push('false');
    
  } else {
    
    setGreenFor(age); 
    validationInfo.push('true');

  }

  if (passwordValue === '') {

    setRedFor(password, 'Password field cannot be empty');
    validationInfo.push('false');
  
    } else if (passwordValue.length < 6)  {

      setRedFor(password, 'Password cannot be less then 6 digits');
      validationInfo.push('false');

    } else {
  
      setGreenFor(password);
      validationInfo.push('true');
  
    }

    if (secondPasswordValue === '') {

      setRedFor(secondPassword, 'Second password field cannot be empty');
      validationInfo.push('false');
    
      } else if (passwordValue !== secondPasswordValue) {
    
        setRedFor(secondPassword, 'Passwords does not match');
        validationInfo.push('false');

      } else {

        setGreenFor(secondPassword);
        validationInfo.push('true');
      
      }

      const validationInfoCheck = validationInfo.every(element => element ==='true');

      if (validationInfoCheck === true) {
        //  set Object to be stored in localStorage
        const userData = {
          username: usernameValue,
          email: emailValue,
          firstName: firstNameValue,
          lastName: lastNameValue,
          password: passwordValue,
          secondPassword: secondPasswordValue,
          age: ageValue,
          shift: []
        };
    
        success.style.display = "block";
        danger.style.display = "none";
    
        localStorage.setItem(userData.username, JSON.stringify(userData));
    
        setTimeout(() => {
          window.location.href = "../login/login.html";
        }, 2000);
    
      } else {
        danger.style.display = "block";
        success.style.display = "none";
      }
};

function checkPasswordMatch() {
  const passwordValue = password.value.trim();
  const secondPasswordValue = secondPassword.value.trim();

  if (passwordValue !== secondPasswordValue) {
    setRedFor(secondPassword, 'Passwords does not match');
    return false;
  } else {
    setGreenFor(secondPassword);
    return true;
  }
}

function setRedFor(input, message) {
  // set inputContainer as a parent element 
  const inputContainer = input.parentElement;
  // set small as a child of inputContainer
  const small = inputContainer.querySelector("small");
  small.innerText = message;
  // add a class 
  inputContainer.className = "input-container error";
}

function setGreenFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container success";
}

function existEmail(email) {

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());

}

function existUsername(username) {

  const re = /^(?=.[A-Za-z])(?=.[0-9])(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

  return re.test(String(username).toLowerCase());

}