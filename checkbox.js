const chCnt = document.getElementById("checkbox-contact");
const togglePg = document.getElementById("toggle-page");

chCnt.addEventListener("change", function (e) {
  if (this.checked) {
    togglePg.classList.add("open-page");
  } else {
    togglePg.classList.remove("open-page");
  }
});

// pointer-events: none;

// const chCnt = document.getElementById("checkbox-contact");
// const togglePg = document.getElementById("toggle-page");

// chCnt.addEventListener("change", function (e) {
//   if (this.checked) {
//     togglePg.classList.add("open-page");
//   } else {
//     togglePg.classList.remove("open-page");

//   }
// });
