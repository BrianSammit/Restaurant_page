function createMenu() {
  const menu = document.createElement("div");
  menu.className = "menu";

  const hmeat = document.createElement("h2");
  hmeat.innerText = "Meats";

  const hdrinks = document.createElement("h2");
  hdrinks.innerText = "Drinks";

  const bmeat = document.createElement("div");
  bmeat.className = "body-menu";

  const bdrinks = document.createElement("div");
  bdrinks.className = "body-menu";

  const bmeat_1 = document.createElement("div");
  bmeat.className = "body-menu";

  const bmeat_2 = document.createElement("div");
  bmeat.className = "body-menu";

  const bmeat_3 = document.createElement("div");
  bmeat.className = "body-menu";

  const bmeat_4 = document.createElement("div");
  bmeat.className = "body-menu";

  const bdrinks_1 = document.createElement("div");
  bdrinks_1.className = "body-menu";

  const bdrinks_2 = document.createElement("div");
  bdrinks_2.className = "body-menu";

  const bdrinks_3 = document.createElement("div");
  bdrinks_3.className = "body-menu";

  const bdrinks_4 = document.createElement("div");
  bdrinks_4.className = "body-menu";

  const img_1 = document.createElement("img");
  img_1.src = "img/1.jpg";
  img_1.alt = "menu";

  const img_2 = document.createElement("img");
  img_2.src = "img/2.jpg";
  img_2.alt = "menu";

  const img_3 = document.createElement("img");
  img_3.src = "img/3.jpg";
  img_3.alt = "menu";

  const img_4 = document.createElement("img");
  img_4.src = "img/4.jpg";
  img_4.alt = "menu";

  const imgd_1 = document.createElement("img");
  imgd_1.src = "img/d1.jpg";
  imgd_1.alt = "menu";

  const imgd_2 = document.createElement("img");
  imgd_2.src = "img/d2.jpg";
  imgd_2.alt = "menu";

  const imgd_3 = document.createElement("img");
  imgd_3.src = "img/d3.jpg";
  imgd_3.alt = "menu";

  const imgd_4 = document.createElement("img");
  imgd_4.src = "img/d4.jpg";
  imgd_4.alt = "menu";

  const img_info_1 = document.createElement("h3");
  img_info_1.innerText = "Meat 1";

  const img_info_2 = document.createElement("h3");
  img_info_2.innerText = "Meat 2";

  const img_info_3 = document.createElement("h3");
  img_info_3.innerText = "Meat 3";

  const img_info_4 = document.createElement("h3");
  img_info_4.innerText = "Meat 4";

  const imgd_info_1 = document.createElement("h3");
  imgd_info_1.innerText = "Drinks 1";

  const imgd_info_2 = document.createElement("h3");
  imgd_info_2.innerText = "Drinks 2";

  const imgd_info_3 = document.createElement("h3");
  imgd_info_3.innerText = "Drinks 3";

  const imgd_info_4 = document.createElement("h3");
  imgd_info_4.innerText = "Drinks 4";

  bmeat_1.appendChild(img_1);
  bmeat_1.appendChild(img_info_1);
  bmeat_2.appendChild(img_info_2);
  bmeat_2.appendChild(img_2);
  bmeat_3.appendChild(img_3);
  bmeat_3.appendChild(img_info_3);
  bmeat_4.appendChild(img_info_4);
  bmeat_4.appendChild(img_4);
  bmeat.appendChild(bmeat_1);
  bmeat.appendChild(bmeat_2);
  bmeat.appendChild(bmeat_3);
  bmeat.appendChild(bmeat_4);

  bdrinks_1.appendChild(imgd_1);
  bdrinks_1.appendChild(imgd_info_1);
  bdrinks_2.appendChild(imgd_info_2);
  bdrinks_2.appendChild(imgd_2);
  bdrinks_3.appendChild(imgd_3);
  bdrinks_3.appendChild(imgd_info_3);
  bdrinks_4.appendChild(imgd_info_4);
  bdrinks_4.appendChild(imgd_4);
  bdrinks.appendChild(bdrinks_1);
  bdrinks.appendChild(bdrinks_2);
  bdrinks.appendChild(bdrinks_3);
  bdrinks.appendChild(bdrinks_4);

  menu.appendChild(hmeat);
  menu.appendChild(bmeat);
  menu.appendChild(hdrinks);
  menu.appendChild(bdrinks);

  return menu;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
