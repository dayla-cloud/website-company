const btn = document.querySelectorAll("#description-appealpoint");
const text = document.querySelectorAll(".description_appealpoint_details");
const toggle = document.getElementById("description-appeallist-toggle");

function active() {
  btn.forEach(el => el.classList.toggle("height"));
  text.forEach(p => p.classList.toggle("display"));
}

// btn.forEach(e => e.addEventListener("click", active));

toggle.addEventListener("click", active);
