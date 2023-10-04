const reset = document.querySelector('.reset_btn');
const username = document.querySelector('#username');
const success = document.querySelector("#success");

// Disable the reset button
reset.disabled = true;

// Add an event listener to the username input field
username.addEventListener('input', () => {
  // Check if the username field is not empty
  if (username.value.trim() !== '') {
    // If not empty, enable the reset button
    reset.disabled = false;
  } else {
    // If empty, disable the reset button
    reset.disabled = true;
  }
});

reset.addEventListener('click', (e) => {
  e.preventDefault();

  success.style.display = "block";
  localStorage.removeItem(username.value);

  setTimeout(() => {
    window.location.href = "../register/register.html";
  }, 3000);
});
