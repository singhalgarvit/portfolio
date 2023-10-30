
const firebaseConfig = {
  apiKey: "AIzaSyB22Zti4wa0b70qOBMHP1re5lMIj7ccwwo",
  authDomain: "personalportfolio-28315.firebaseapp.com",
  databaseURL: "https://personalportfolio-28315-default-rtdb.firebaseio.com",
  projectId: "personalportfolio-28315",
  storageBucket: "personalportfolio-28315.appspot.com",
  messagingSenderId: "572931778721",
  appId: "1:572931778721:web:d43a48d33312e558aba8e0"
};

firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');



function submitForm(e){
  e.preventDefault();
  var name = getInputVal('name');
  var email = getInputVal('email');
  var msg = getInputVal('msg');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Clear form
  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    msg:msg
  });
}