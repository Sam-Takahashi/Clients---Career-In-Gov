const formSignin = document.getElementById("form_signin");
const formConvenience = document.getElementById("form_convenience");
const formRegister = document.getElementById("form_register");

const getEmailField = (form) => form.querySelector('input[name="email"]');
const getPasswordField = (form) => form.querySelector('input[name="password"]');
const getConfirmPasswordField = (form) => form.querySelector('input[name="confirm_password"]');
const getConfirmTerms = (form) => form.querySelector('input[name="terms"]');

formSignin.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs(getEmailField(formSignin), getPasswordField(formSignin));
});

formConvenience.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs(getEmailField(formConvenience), getPasswordField(formConvenience));
});

formRegister.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs(getEmailField(formRegister), getPasswordField(formRegister), getConfirmPasswordField(formRegister), getConfirmTerms(formRegister));
});


const setError = (el, msg) => {
  const inputControl = el.parentElement;
  const errorDisplay = inputControl.querySelector(".error")
  errorDisplay.innerText = msg;
  inputControl.classList.add("error");
}

const setSuccess = el => {
  const inputControl = el.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = (...inputs) => {
  for (const input of inputs) {
    const value = input.value.trim();

    if (value === '') {
      setError(input, `${input.name.replace('_', ' ')} is required`);
    } else if (input.name === 'email' && !isValidEmail(value)) {
      setError(input, 'Provide a valid email address');
    } else if (input.name === 'password' && value.length < 8) {
      setError(input, 'Password must be at least 8 characters');
    } else if (input.name === 'confirm_password' && value !== getPasswordField(input.form).value.trim()) {
      setError(input, "Passwords don't match");
    } else if (input.name === 'terms' && !input.checked) {
      setError(input, "This field is required");
    } else {
      setSuccess(input);
    }
  }
}
