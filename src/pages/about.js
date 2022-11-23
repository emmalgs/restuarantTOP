import { tabs } from "../functions/tabs"

export function about() {

    const CONTENT = document.querySelector('#content')

    const SIDEBAR = document.createElement('div')
    const NAV = document.createElement('div')
    const MENU = document.createElement('div')
    const ABOUT = document.createElement('div')
    const CONTACT = document.createElement('div')
    const MAIN = document.createElement('div')

    SIDEBAR.classList.add('sidebar')
    CONTENT.append(SIDEBAR)

    NAV.classList.add('nav')
    CONTENT.appendChild(NAV)

    MENU.classList.add('menu')
    MENU.textContent = 'Menu'
    NAV.append(MENU)

    ABOUT.classList.add('about')
    ABOUT.textContent = 'About'
    ABOUT.style.backgroundColor = 'pink'
    NAV.append(ABOUT)

    CONTACT.classList.add('contact')
    CONTACT.textContent = 'Contact'
    NAV.append(CONTACT)

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    const info = document.createElement('div')
    info.classList.add('info')
    info.textContent = 'This here is a restaurant. We craft food with our little paws.'
    MAIN.append(info)

    tabs()
}