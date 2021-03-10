import './style.scss'
import Menu from './menu'

const content = document.getElementById('content');
const header = document.createElement('header');
const h1 = document.createElement('h1')
const nav = document.createElement("nav");
const hh = document.createElement('button')
const hm = document.createElement('button')
const hc = document.createElement('button')

const main = document.createElement('main');
const div = document.createElement('div')
const h2 = document.createElement('h2')
const p = document.createElement('p')
const img = document.createElement('img')
const p2 = document.createElement('p')

const footer = document.createElement('footer');
const pf = document.createElement('p')
const icong = document.createElement('i')



h1.innerText = 'My Restaurant';
hh.innerText = 'HOME'
hm.innerText = ' MENU '
hc.innerText = 'CONTACT'
nav.className = 'nav'
nav.appendChild(hh)
nav.appendChild(hm)
nav.appendChild(hc)
header.className = 'header'
header.appendChild(h1);
header.appendChild(nav);

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
