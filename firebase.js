
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

document.getElementById("contactForm").addEventListener('submit',submitForm);

async function submitForm(e){k
  e.preventDefault();
  var name = getInputVal('name');
  var email = getInputVal('email');
  var msg = getInputVal('msg');
  // var date=new Date();
  // var time=new Date().getTime();
  // Save message
  await saveMessage(name, email, msg);
  alert("Your Response has been recorded.\nThanks For Your Response 💓🙂");
  // Clear form
  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, msg){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    msg:msg,
    // date:date
    // time:time
  });
}