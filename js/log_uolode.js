import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
import { getStorage, ref, uploadString } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";
import { getAuth, checkActionCode, applyActionCode, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";





 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

function sent() {
    // sendPasswordResetEmail(auth, "souravbarui8040@gmail.com").then(() => {
    //     // Password reset confirmation sent. Ask user to check their email.
    //     console.log("work");
    // }).catch((error) => {
    //     // Error encountered while sending password reset code.
    //     console.log(error);
    // });

    // checkActionCode(auth, actionCode).then((info) => {
    //     // Get the restored email address.
    //     restoredEmail = info['data']['email'];
    
    //     // Revert to the old email.
    //     return applyActionCode(auth, actionCode);
    // })
}
// sent()

inputFild[1].addEventListener("input", (e) => {
    if (!e.target.files[0]) return;

    let file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
        uploadBtn.addEventListener("click", () => {

            const storage = getStorage();
            let base64Img = reader.result;

            const storageRef = ref(storage, `Images/${Math.random()}${file.name}`);
            uploadCompleteInfo.style.display = "flex";
            uploadingInfo.innerHTML = "Uploading...";

            // -----------------uploding file -----------------------------------
            uploadString(storageRef, base64Img, 'data_url').then((snapshot) => {
                uploadCompleteInfo.classList.add("active");
                uploadingInfo.innerHTML = "Complete";
                console.log('Uploaded Complete');
            });
        })
    }
})





















// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }