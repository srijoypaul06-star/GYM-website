document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const menuList = document.getElementById("menue-list");

  hamburger.addEventListener("click", () => {
    if (menuList.style.display === "flex") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "flex";
    }
  });

});
