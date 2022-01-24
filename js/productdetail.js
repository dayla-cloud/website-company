const descripBg = document.querySelectorAll("#description-appealpoint");
const descrip = document.querySelectorAll(".description_appealpoint_details");
const btn = document.getElementById("description-appeallist-toggle");

function active() {
  descripBg.forEach(el => el.classList.toggle("height"));
  descrip.forEach(p => p.classList.toggle("display"));
}

// btn.forEach(e => e.addEventListener("click", active));

btn.addEventListener("click", active);
