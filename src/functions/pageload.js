import { tabs } from "./tabs"


export function pageload() {
    const CONTENT = document.getElementById('content')

    const HEADER = document.createElement('div')

    HEADER.classList.add('header')
    HEADER.textContent = `BUCKY'S ONE-STOP`
    CONTENT.appendChild(HEADER)

    const SIDEBAR = document.createElement('div')
    const NAV = document.createElement('div')
    const MENU = document.createElement('div')
    const ABOUT = document.createElement('div')
    const CONTACT = document.createElement('div')

    SIDEBAR.classList.add('sidebar')
    SIDEBAR.textContent = `B
    U
    C
    K
    Y
    S`
    CONTENT.append(SIDEBAR)

    NAV.classList.add('nav')
    CONTENT.appendChild(NAV)

    MENU.classList.add('menu')
    MENU.textContent = 'Menu'
    NAV.append(MENU)

    ABOUT.classList.add('about')
    ABOUT.textContent = 'About'
    NAV.append(ABOUT)

    CONTACT.classList.add('contact')
    CONTACT.textContent = 'Contact'
    NAV.append(CONTACT)

    tabs()
}