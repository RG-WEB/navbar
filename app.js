const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", function () {
  links.classList.toggle("show-sidebar");
});
