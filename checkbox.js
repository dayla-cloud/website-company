const chCnt = document.getElementById("checkbox-contact");
const togglePg = document.getElementById("toggle-page");

chCnt.addEventListener("change", function (e) {
  if (this.checked) {
    togglePg.classList.add("open-page");
  } else {
    togglePg.classList.remove("open-page");
  }
});

// 오픈페이지가 없을 때 페이지영역을 클릭하면 알럿을 켜주세요
