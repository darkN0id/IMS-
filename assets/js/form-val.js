const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent the form from submitting

    //validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();
        isConfirmPasswordValid = checkConfirmPassword();
    // let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isCondirmPasswordValid;
    // submit to the server if the form is valid
    // if(isFormValid) {

    // }
    if(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {

    }
}) 

const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    }
    else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`) 
    }
    else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const isRequired = value => value === '' ? false: true;
const isBetween = (length, min, max) => length < min || length > max ? false: true;

const showError = (input, message) => {
    // get the form field element
    const formField = input.parentElement; 
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error')
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
     // get the form field element
     const formField = input.parentElement; 
     // add the error class
     formField.classList.remove('error');
     formField.classList.add('success')
     // show the error message
     const success = formField.querySelector('small');
     success.textContent = '';
}

const checkEmail = () => {
    let valid = false
    const email = emailEl.value.trim();
    if(!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
   } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
   } else {
        showSuccess(emailEl);
        valid = true;
   }
   return valid;
};

const isEmailValid = (email) => {
    const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkPassword = () => {
    let valid = false;
        const password = passwordEl.value.trim();

        if(!isRequired(passwordEl)) {
            showError(passwordEl, 'Password cannot be blank. ')
        } else if (!isPasswordSecure(password)) {
            showError(passwordEl, 'Password must has at least 8 characters that include at aleast 1 lowercase character, 1 uppercase characters, 1 number, and 1 special charecter');
        } else {
            showSuccess(passwordEl);
            valid = true;
        }
        return valid;
};

const isPasswordSecure = (password) => {
    const re = new
RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
function checkPassword() {
    let valid = false;
    const min = 3,
      max = 25;
    const password = passwordE1.value.trim();
    if (!isRequired(password)) {
      showError(passwordE1, "You have to set a password");
    } else if (!isPasswordValid(password)) {
      showError(
        passwordE1,
        "Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character "
      );
    } else {
      showSuccess(passwordE1);
      valid = true;
    }
    return true;
  }
  
  function checkConfirmPassword() {
    let valid = false;
    const passwordCheck = confirmPasswordE1.value.trim();
    if (!isRequired(passwordCheck)) {
      showError(confirmPasswordE1, "You will have to confirm to proceed");
    } else if (!passwordMatch()) {
      showError(confirmPasswordE1, "Password is not matching");
    } else {
      showSuccess(confirmPasswordE1);
      valid = true;
    }
    return valid;
  }
  const passwordMatch = () => {
    if (passwordE1.value == confirmPasswordE1.value) {
      return true;
    }
  };