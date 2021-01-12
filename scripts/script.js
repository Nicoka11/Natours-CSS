const navLink = document.querySelector(".nav__link");
const navButton = document.querySelector(".nav__button");

navButton.addEventListener("hover", function (e) {
  console.log(e.target);
  navButton.style.backgroundColor = "#000000";
});

console.log("The script is linked");
