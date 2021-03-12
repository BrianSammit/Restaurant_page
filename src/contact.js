function createContact() {
  const about = document.createElement("div");
  about.className = "about";

  const about_image = document.createElement("div");
  about_image.className = "about-image";

  const about_info = document.createElement("div");
  about_info.className = "about-image";

  const img = document.createElement("img");
  img.src = "img/about.jpg";
  img.alt = "about";

  const h2 = document.createElement("h2");
  h2.innerText = "About us";

  const p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, odio aliquid! Quo earum provident culpa eaque asperiores rem soluta, sint quisquam ipsam voluptate nemo saepe laudantium! Accusantium similique ab aliquid.";

  about_image.appendChild(img);
  about_info.appendChild(h2);
  about_info.appendChild(p);

  about.appendChild(about_image);
  about.appendChild(about_info);

  return about;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
