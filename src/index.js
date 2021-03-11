import "./style.scss";
import loadHome from "./home";
// import loadMenu from "./menu";
// import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  const h1 = document.createElement("h1");
  h1.className = "restaurant-name";
  h1.innerText = "My Restaurant";

  header.appendChild(h1);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const hh = document.createElement("button");
  hh.className = "button-nav";
  hh.textContent = "Home";
  hh.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(hh);
    loadHome();
  });

  const hm = document.createElement("button");
  hm.className = "button-nav";
  hm.textContent = "Menu";
  hm.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(hm);
    loadMenu();
  });

  const hc = document.createElement("button");
  hc.className = "button-nav";
  hc.textContent = "Contact";
  hc.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(hc);
    loadContact();
  });

  nav.appendChild(hh);
  nav.appendChild(hm);
  nav.appendChild(hc);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const pf = document.createElement("p");
  pf.innerText = "Copyright © 2021 Brian ";

  const icong = document.createElement("i");
  icong.className = "fab fa-github";

  pf.appendChild(icong);
  footer.appendChild(pf);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

initializeWebsite();
