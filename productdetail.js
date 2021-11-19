// function showdetail(e) {
//   const detail = document.getElementById("description-appealpoint-details");

//   detail.classList.add("open-appeal-detail");
//   e.currentTarget.classList.add("open-appealpoint-height");
//   console.log("hi");
// }

const btn = document.querySelectorAll(".description_appealpoint");

function showdetail(e) {
  e.currentTarget.classList.toggle("open-appealpoint-height");
  const p = document.querySelectorAll("description_appealpoint_details");
}

// const p = document.querySelectorAll(".description_appealpoint_details");
// function show(event) {
//   event.currentTarget.classList.toggle("open-appeal-detail");
// }

btn.forEach(n => n.addEventListener("click", showdetail));
