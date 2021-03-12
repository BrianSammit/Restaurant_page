function createMenu() {}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
