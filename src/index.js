import './style.scss'

const content = document.getElementById('content');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
const h1 = document.createElement('h1')
const div = document.createElement('div')
const h2 = document.createElement('h2')
const p = document.createElement('p')
const img = document.createElement('img')
const p2 = document.createElement('p')
const pf = document.createElement('p')
const icong = document.createElement('i')


h1.innerText = 'My Restaurant';
header.className = 'header'
header.appendChild(h1);


main.className = 'main'
h2.innerText = 'Rapid Food'
p.innerText = 'Happy Belly Happy Life'
img.src ='/dist/img/sheff.jpg'
p2.innerText = 'Get your favorite food and enjoy it'
div.appendChild(h2)
div.appendChild(p)
div.appendChild(img)
div.appendChild(p2)
main.appendChild(div)

footer.className = 'footer'
pf.innerText = 'Copyright © 2021 Brian '
icong.className = 'fab fa-github'
pf.appendChild(icong)
footer.appendChild(pf)

content.appendChild(header)
content.appendChild(main)
content.appendChild(footer)