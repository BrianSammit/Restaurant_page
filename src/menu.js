function createMenu() {
  const menu = document.createElement('div');
  menu.className = 'menu';

  const hMeat = document.createElement('h2');
  hMeat.innerText = 'Meats';

  const hDrinks = document.createElement('h2');
  hDrinks.innerText = 'Drinks';

  const bMeat = document.createElement('div');
  bMeat.className = 'body-menu';

  const bDrinks = document.createElement('div');
  bDrinks.className = 'body-menu';

  const bMeat1 = document.createElement('div');
  const bMeat2 = document.createElement('div');
  const bMeat3 = document.createElement('div');
  const bMeat4 = document.createElement('div');

  const bDrinks1 = document.createElement('div');
  const bDrinks2 = document.createElement('div');
  const bDrinks3 = document.createElement('div');
  const bDrinks4 = document.createElement('div');

  const img1 = document.createElement('img');
  img1.src = 'img/1.jpg';
  img1.alt = 'menu';

  const img2 = document.createElement('img');
  img2.src = 'img/2.jpg';
  img2.alt = 'menu';

  const img3 = document.createElement('img');
  img3.src = 'img/3.jpg';
  img3.alt = 'menu';

  const img4 = document.createElement('img');
  img4.src = 'img/4.jpg';
  img4.alt = 'menu';

  const imgd1 = document.createElement('img');
  imgd1.src = 'img/d1.jpg';
  imgd1.alt = 'menu';

  const imgd2 = document.createElement('img');
  imgd2.src = 'img/d2.jpg';
  imgd2.alt = 'menu';

  const imgd3 = document.createElement('img');
  imgd3.src = 'img/d3.jpg';
  imgd3.alt = 'menu';

  const imgd4 = document.createElement('img');
  imgd4.src = 'img/d4.jpg';
  imgd4.alt = 'menu';

  const imgInfo1 = document.createElement('h3');
  imgInfo1.innerText = 'Meat 1';

  const imgInfo2 = document.createElement('h3');
  imgInfo2.innerText = 'Meat 2';

  const imgInfo3 = document.createElement('h3');
  imgInfo3.innerText = 'Meat 3';

  const imgInfo4 = document.createElement('h3');
  imgInfo4.innerText = 'Meat 4';

  const imgdInfo1 = document.createElement('h3');
  imgdInfo1.innerText = 'Drinks 1';

  const imgdInfo2 = document.createElement('h3');
  imgdInfo2.innerText = 'Drinks 2';

  const imgdInfo3 = document.createElement('h3');
  imgdInfo3.innerText = 'Drinks 3';

  const imgdInfo4 = document.createElement('h3');
  imgdInfo4.innerText = 'Drinks 4';

  bMeat1.appendChild(img1);
  bMeat1.appendChild(imgInfo1);
  bMeat2.appendChild(imgInfo2);
  bMeat2.appendChild(img2);
  bMeat3.appendChild(img3);
  bMeat3.appendChild(imgInfo3);
  bMeat4.appendChild(imgInfo4);
  bMeat4.appendChild(img4);
  bMeat.appendChild(bMeat1);
  bMeat.appendChild(bMeat2);
  bMeat.appendChild(bMeat3);
  bMeat.appendChild(bMeat4);

  bDrinks1.appendChild(imgd1);
  bDrinks1.appendChild(imgdInfo1);
  bDrinks2.appendChild(imgdInfo2);
  bDrinks2.appendChild(imgd2);
  bDrinks3.appendChild(imgd3);
  bDrinks3.appendChild(imgdInfo3);
  bDrinks4.appendChild(imgdInfo4);
  bDrinks4.appendChild(imgd4);
  bDrinks.appendChild(bDrinks1);
  bDrinks.appendChild(bDrinks2);
  bDrinks.appendChild(bDrinks3);
  bDrinks.appendChild(bDrinks4);

  menu.appendChild(hMeat);
  menu.appendChild(bMeat);
  menu.appendChild(hDrinks);
  menu.appendChild(bDrinks);

  return menu;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
