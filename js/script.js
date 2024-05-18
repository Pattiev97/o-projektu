const toggleMenu = (menuSelector, iconSelector) => {
  const menu = document.querySelector(menuSelector);
  const icon = document.querySelector(iconSelector);
  if (!menu || !icon) return;

  const computedStyle = getComputedStyle(menu);

  if (computedStyle.display === "block") {
    menu.style.display = "none";
    icon.firstElementChild.className = "fa fa-bars";
  } else {
    menu.style.display = "block";
    icon.firstElementChild.className = "fa fa-times";
  }
};

document.getElementById('hamburger').addEventListener('click', () => {
  toggleMenu('.menu', '.icon');
});
