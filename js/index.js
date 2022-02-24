const form = document.getElementById("post");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            location.replace("welcome.html");
        })
        .catch((err) => {
            errorMessage.innerHTML = "* " + err.message;
            errorMessage.style.background = "#ffffff";
    }) 
})
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    }
})
