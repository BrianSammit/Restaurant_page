function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "img/sheff1.jpg";
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("Best pizza in your country"));
  home.appendChild(createParagraph("Made with passion since 1908"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;

// const main = document.createElement("main");
// const div = document.createElement("div");
// const h2 = document.createElement("h2");
// const p = document.createElement("p");
// const img = document.createElement("img");
// const p2 = document.createElement("p");

// main.className = "main";
// h2.innerText = "Rapid Food";
// p.innerText = "Happy Belly Happy Life";
// img.src = "/dist/img/sheff.jpg";
// p2.innerText = "Get your favorite food and enjoy it";
// div.appendChild(h2);
// div.appendChild(p);
// div.appendChild(img);
// div.appendChild(p2);
// main.appendChild(div);
