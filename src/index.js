import './style.css'
import { pageload } from './functions/pageload.js'
import { render } from './functions/render'
import { menu } from './pages/menu.js'
import { firstload } from './functions/firstload.js'
import './functions/pageload.js'


    firstload()
   
    const home = document.querySelector('.header')
    const menuBtn = document.querySelector('.menu')

    home.addEventListener('click', () => {
        render()
        pageload();
    })
    menuBtn.addEventListener('click', () => {
        render()
        menu()
    })
  document.querySelector('.quote').textContent = 'HEWCKIN HECK'
