let openBtn = document.querySelector(".burger_img");
let closeBtn = document.querySelector(".sidebar__close");
let sidebar = document.querySelector(".sidebar");

let body = document.querySelector("body");

openBtn.addEventListener("click", function () {
  sidebar.classList.add("sidebar_open");
  body.classList.add("body");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("sidebar_open");
  body.classList.remove("body");
});
