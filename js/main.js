const hBtn = document.querySelectorAll(".h_btn");
const section = document.querySelectorAll("section");
const inputFild = document.querySelectorAll(".input_fild");
const fileInput = document.querySelectorAll(".file_input");
const chooseFileTest = document.getElementById("choose_file_test");
const selectType = document.getElementById("select_type");
const uploadFiles = document.getElementById("upload_files");
const closeBtn = document.getElementById("close_btn");
const uploadBtn = document.getElementById("upload_btn");
const uploadComplete = document.getElementById("upload_complete");
const uploadCompleteInfo = document.getElementById("upload_complete_info");
const uploadingInfo = document.getElementById("uploading_info");

hBtn[0].addEventListener("click", () => {
  selectType.style.display = "grid";
});
section.forEach((e, i) => {
  e.addEventListener("click", () => {
    uploadFiles.style.display = "flex";
    inputFild.forEach((e, j) => {
      if (i === j) {
        e.style.display = "flex";
      } else {
        e.style.display = "none";
      }
    });
  });
}); 
inputFild.forEach((e, i) => {
  e.addEventListener("click", () => {
    fileInput[i].click();
  });
  e.addEventListener("input", (event) => {
    if(!event.target.files[0])return;
    let fileName = event.target.files[0].name;
    chooseFileTest.innerHTML = fileName;
  });
});
closeBtn.addEventListener("click", () => {
  selectType.style.display = "none";
  uploadFiles.style.display = "none";
  chooseFileTest.innerHTML = "";
});
uploadComplete.addEventListener("click", () => {
  uploadCompleteInfo.style.display = "none";
  uploadCompleteInfo.classList.remove("active");
});