import './style.css'
import { pageload } from './functions/pageload.js'
import { menu } from './pages/menu.js'
import { header } from './pages/header'
import { home } from './pages/home'
import { render } from './functions/render'

function component() {
    render()
    document.querySelector('.header').addEventListener('click', () => {
        render();
        pageload();
    })
    document.querySelector('.menu').addEventListener('click', () => {
        render();
        menu();
    })
}

component()