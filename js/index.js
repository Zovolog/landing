function scrollToContact() {
  var targetBlock = document.getElementById("form-block");
  targetBlock.scrollIntoView({ behavior: "smooth" });
}
function scrollToServices() {
  var targetBlock = document.getElementById("service-block");
  targetBlock.scrollIntoView({ behavior: "smooth" });
}

function openMenu() {
  const menu = document.querySelector(".mobile-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function scrollToService(id) {
  window.location.href = `services.html#${id}`;
}
const status = sessionStorage.getItem("status");
function closeWindow() {
  const cookies = document.querySelector(".cookies-container");
  cookies.style.display = "none";
}
function sendUserToThx() {
  window.location.href = "thx.html";
}

function backMainPage(){
  window.location.href = "index.html";
}