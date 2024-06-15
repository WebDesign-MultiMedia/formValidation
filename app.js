// let htmlBody = document.querySelector('body');
// htmlBody.style.background = 'gold';

const Uname = document.getElementById('username');

const email = document.getElementById('email');

const password = document.getElementById('password');

const passwordCheck = document.getElementById('passwordCheck');

const form = document.getElementById('registration');

const Uname_error = document.getElementById('error')

const error_email = document.getElementById('error-email');

const pError = document.getElementById('passwordError');


//USERNAME
form.addEventListener('submit', (e) => {

  if (Uname.value === '' || Uname.value == null) {
    e.preventDefault();
    Uname_error.textContent = " Username required";
    Uname_error.style.color = 'red';
    return true;
  } else {
    Uname_error.style.display = 'none';
    return false
  }
})

//EMAIL
form.addEventListener('submit', (e) => {

  if (email.value === '' || email.value == null) {
    e.preventDefault();

    error_email.textContent = " Email required";
    error_email.style.color = 'red';
    return true;
  } else {
    error_email.style.display = 'none';
    return false
  }
})


//PASSWORD
form.addEventListener('submit', (e) => {
  if (password.value === '' || password.value == null) {
    e.preventDefault();
    pError.textContent = "Password Required";
    pError.style.color = 'red';
    return true;
  } else {
    pError.style.display = "none"
    return false
  }
})

// PASSWORD CHECK
form.addEventListener('submit', (e) => {
  const password = document.getElementById('password');
  const passwordCheck = document.getElementById('passwordCheck');
  const errMessage = document.getElementById('PasswordCheckMess')

  if (password.value !== passwordCheck.value) {
    e.preventDefault();
    errMessage.textContent = "Passwords do not match";
    return true
  }
})


//TERMS 
form.addEventListener('submit', (e) => {
  const terms = document.getElementById('accept');
  const errorMess = document.getElementById('check-error');
  if (!terms.checked) {
    e.preventDefault();
    errorMess.textContent = "You Must Agree to Proceed";
    errorMess.style.color = 'white';
    errorMess.style.border = '2px solid white';

  } else {
    errorMess.style.display = 'none';
  }

})

localStorage.setItem('username', 'username')
localStorage.setItem('password', 'password')
console.log(localStorage.getItem('username'))
        

//LocalStroage


// let Saved = {
//   username: '',
//   email: '',
//   password: '',
// }
// let savdData = JSON.stringify(Saved);

// localStorage.setItem('Saved', savdData)

// let mySaved_deserialized = JSON.parse(localStorage.getItem('Saved'));

// console.log(mySaved_deserialized)

// function check(){
//   const terms = document.getElementById('terms');
//   const checkError = document.getElementById('check-error');

//   if(!terms.checked){
//     checkError.style.display = 'block';

//   } else {
//     checkError.style.display = 'none';
//     document.getElementById('form').submit();
//   }
// }

