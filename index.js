const form = document.querySelector('form');
const emailInput = form.querySelector('input');
const emailError = form.querySelector('#emailError');
const iconError = form.querySelector('.icon-error');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function handleValidEmail() {
  alert('Success!');
  updateEmailState(false);
  emailInput.value = '';
}

function handleInvalidEmail() {
  updateEmailState(true);
  emailInput.focus();
  emailError.textContent = 'Please provide a valid email';
}

function updateEmailState(isInvalid) {
  const ariaInvalid = isInvalid ? 'true' : 'false';
  emailInput.setAttribute('aria-invalid', ariaInvalid);
  emailInput.classList.toggle('invalid', isInvalid);
  iconError.style.display = isInvalid ? 'inline' : 'none';
  if (!isInvalid) emailError.textContent = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isValidEmail = emailRegex.test(emailInput.value);
  isValidEmail ? handleValidEmail() : handleInvalidEmail();
});
