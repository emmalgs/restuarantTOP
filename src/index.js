import './style.css'
import { pageload } from './pageload.js'
import { menu } from './pages/menu.js'
import { header } from './pages/header'
import { home } from './pages/home'

function component() {
    header()
    home()
    document.querySelector('.menu').addEventListener('click', () => {
        menu()})
}

component()