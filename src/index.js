import './style.css'
import { pageload } from './functions/pageload.js'
import './functions/render.js'
// import { menu } from './pages/menu'
// import { render } from './functions/render.js'


function component() {
    const menuBtn = document.querySelector('.menu')
    pageload()
//  menuBtn.addEventListener('click', e => {
//     e.preventDefault
//     menu()
//  })
 document.querySelector('.quote').textContent = 'THE HECK'
}

component()