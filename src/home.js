const createHome = () => {
  const home = document.createElement("div");
  home.className = "home";

  const img = document.createElement("img");
  img.src = "img/chef.jpg";
  img.alt = "Chef";

  const h2 = document.createElement("h2");
  h2.innerText = "Happy Belly Happy Life";

  const p2 = document.createElement("p");
  p2.innerText = "Get your favorite food and enjoy it";

  home.appendChild(h2);
  home.appendChild(img);
  home.appendChild(p2);

  return home;
};

const loadHome = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
};

export default loadHome;
