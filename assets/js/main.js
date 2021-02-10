let txt = document.getElementById("txt");
let lastMassage = document.getElementById("last-massage");
let warn = document.getElementById("warn");
function send() {
  lastMassage.innerHTML = txt.value;

  if (txt.value === "") {
    warn.style.display = "block";
  } else {
    warn.style.display = "none";
  }
}
