const signUpValidation = () => {
    // creat form validation for signUp.html
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let errorMessages = '';
    if (firstName === '' || lastName === '' || email === '' || password === '') {
        // useing alertify to show error message
        errorMessages = 'پر کردن تمامی فیلد ها الزامی است';
        window.alertify.error(errorMessages);
        return false;
    }

    if (password.length < 6) {
        errorMessages = 'رمز عبور باید حداقل 6 کاراکتر باشد';
        window.alertify.error(errorMessages);
        return false;
    }

    if (password.length > 20) {
        errorMessages = 'رمز عبور باید حداکثر 20 کاراکتر باشد';
        window.alertify.error(errorMessages);
        return false;
    }

    return true;
}
/* add event listener for form after pushing submit button*/
const signUpForm = document.getElementById('signUpForm');
const signUpButton = document.getElementById('signUpButton');

signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (signUpValidation()) {
        signUpForm.submit();
    }
});



