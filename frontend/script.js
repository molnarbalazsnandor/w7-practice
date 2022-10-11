const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function (event) {
  event.target.classList.toggle("clicked");
});
