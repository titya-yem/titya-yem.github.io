const menu = document.querySelector(".fa-bars");
const exit = document.querySelector(".fa-circle-xmark");
const nav = document.querySelector("header ul");

menu.addEventListener("click", () => {
  nav.classList.add("open");
});

exit.addEventListener("click", () => {
  nav.classList.remove("open");
});
