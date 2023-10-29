import {firebase} from "./firebase/app";
import "firebase/auth";

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

  const contact=firebase.database();
  const ref=contact.ref("contactForm");

  function submitForm(e){
      e.preventDefault();
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var msg=document.getElementById("msg").value;
      
      contact.push({
          name:name,
          email:email,
          msg:msg
        });
        console.log(name,email,msg);
    }
  