import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submitBtn = document.querySelector(".submit_btn");
const out = document.querySelectorAll(".out");
const username = document.getElementById("username");
const fullName = document.getElementById("full_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const coPassword = document.getElementById("coPassword");

// let ss = "u1";
// function f() {
//   ss = ss == "u1" ? "u2" : "u1";
//   let xss = ss == "u1" ? "u2" : "u1";
//   out[4].classList.remove(xss)
//   out[4].classList.remove(ss)
//   out[4].classList.add(ss)
// }

// setInterval(() => {
//   f()
// }, 1000)
let vPass, cPass, passOneTime;

function remInpUndCls(ary) {
  ary.forEach(e => {
    e.classList.remove("u1")
    e.classList.remove("u2")
  })
}

// ----- chack password and confirm password are same
password.addEventListener("input", (e) => {
  if (e.target.value.length < 8 && !passOneTime) {
    remInpUndCls([out[3], out[4]])
    return;
  } else if (e.target.value.length < 8) {
    out[3].classList.add("u1");
    out[3].classList.remove("u2");
  } else {
    passOneTime = true;
    vPass = e.target.value;
    remInpUndCls([out[3]]);
    out[3].classList.add("u2")
    if (vPass === cPass) {
      out[4].classList.add("u2");
      out[4].classList.remove("u1");
    }else{
      out[4].classList.add("u1");
      out[4].classList.remove("u2");
    }
  }
})
coPassword.addEventListener("input", (e) => {
  if (e.target.value !== vPass) {
    out[4].classList.add("u1");
    out[4].classList.remove("u2");
    cPass = false;
  } else {
    cPass = e.target.value;
    out[4].classList.remove("u1")
    out[4].classList.add("u2")
  }
})


submitBtn.addEventListener('click', () => {
  const gender = document.querySelector('input[name="gen"]:checked').value;
  createAccount(fullName.value, username.value, gender, email.value, password.value);
});

// create firebase cloud store account 
function createAccount(fullName, username, gender, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      let uid = auth.currentUser.uid;
      writeUserData(uid, fullName, username, email, parseInt(password, 36), gender)
    })
    .catch((error) => {
      console.log(error);
    });
}

// send data in firebase data base
function writeUserData(userId, name, usernaem, email, password, gender) {
  const database = getDatabase();
  set(ref(database, `users/${userId}`), {
    name: name,
    loginDate: Date.now(),
    email: email,
    usernaem: usernaem,
    userId: userId,
    password: password,
    gender: gender
  }).then(() => {
    console.log("done");
  }).catch((error) => {
    console.log(error);
  });
}

