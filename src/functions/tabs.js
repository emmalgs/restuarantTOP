import { render } from "./render"
import { pageload } from "./pageload"
import { menu } from "../pages/menu"
import { about } from "../pages/about"
import { contact } from "../pages/contact"
import { header } from "../pages/header"

export function tabs() {
    const home = document.querySelector('.header')
    const menuBtn = document.querySelector('.menu')
    const aboutBtn = document.querySelector('.about')
    const contactBtn = document.querySelector('.contact')

    home.addEventListener('click', () => {
        render()
        pageload();
    })
    menuBtn.addEventListener('click', () => {
        render()
        menu()
    })
    aboutBtn.addEventListener('click', () => {
        render()
        about()
    })

    contactBtn.addEventListener('click', () => {
        render()
        contact()
    })
}