const chCnt = document.getElementById("checkbox-contact");
const togglePg = document.getElementById("toggle-page");

chCnt.addEventListener("change", function () {
  togglePg.classList.toggle("open-page");
});
