
const firebaseConfig = {
  apiKey: "AIzaSyDDUGJWaTyNqeCpBbfqRDh2hVQ7Jri5nws",
  authDomain: "portfolio-38607.firebaseapp.com",
  databaseURL: "https://portfolio-38607-default-rtdb.firebaseio.com",
  projectId: "portfolio-38607",
  storageBucket: "portfolio-38607.appspot.com",
  messagingSenderId: "403294971213",
  appId: "1:403294971213:web:49321c5f5fba944dbcc304"
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