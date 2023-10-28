const dropdown = document.querySelector(".nav-dropdown");
const dropItems = document.querySelector(".dropdown-items");

dropdown.addEventListener("click", function () {
  dropItems.classList.toggle("dropdown-items-show");
  if (dropItems.classList.length < 2) {
    dropItems.classList.toggle("dropdown-close");
    setTimeout(function () {
      dropItems.classList.remove("dropdown-close");
    }, 1000);
  }
});
