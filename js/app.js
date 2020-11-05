  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvBr6ESOanJbz2QNbsFzvS3pE1NtXl8PI",
    authDomain: "lsc-project-336f4.firebaseapp.com",
    databaseURL: "https://lsc-project-336f4.firebaseio.com",
    projectId: "lsc-project-336f4",
    storageBucket: "lsc-project-336f4.appspot.com",
    messagingSenderId: "618529113129",
    appId: "1:618529113129:web:3df9636739c9aee9744838",
    measurementId: "G-8NN7N5CY7D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.firestore();
const form = document.querySelector("#newsletter-form")

//validate email
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
$('.success-msg').hide();
//submit newsletter form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateEmail(form.email.value) && form.email.value !== '') {
        db.collection('newsletter').add({
            email: form.email.value
        });
    console.log('successful submission!');
    $('.success-msg').fadeIn(500);
    $(form).hide();
    } else {
        console.log('error on form submission');
        $('.success-msg').hide();
    }
});

//jQuery simple fade in content 
//$('body').fadeIn(1500);


