const itemNav = document.querySelectorAll(".drinksType li");
const drinkGroup = document.querySelectorAll(".drinkGroup");
itemNav.forEach((menuList) => {
  menuList.addEventListener("click", () => {
    removeActiveMenu();
    menuList.classList.add("active");
    const drinkGroupContent = document.querySelector(`#${menuList.id}-content`);
    removeContentActive();
    drinkGroupContent.classList.add("active");
  });
});

function removeActiveMenu() {
  itemNav.forEach((menu) => {
    menu.classList.remove("active");
  });
}

function removeContentActive() {
  drinkGroup.forEach((content) => {
    content.classList.remove("active");
  });
}
