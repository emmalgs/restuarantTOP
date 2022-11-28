import { tabs } from "../functions/tabs"

export function contact() {

    const CONTENT = document.querySelector('#content')

    // const SIDEBAR = document.createElement('div')
    // const NAV = document.createElement('div')
    // const MENU = document.createElement('div')
    // const ABOUT = document.createElement('div')
    // const CONTACT = document.createElement('div')
    const MAIN = document.createElement('div')
    const DINNER = document.createElement('div')
    
    const menuPic = document.createElement('img')

    // SIDEBAR.classList.add('sidebar')
    // CONTENT.append(SIDEBAR)

    // NAV.classList.add('nav')
    // CONTENT.appendChild(NAV)

    // MENU.classList.add('menu')
    // MENU.textContent = 'Menu'
    // NAV.append(MENU)

    // ABOUT.classList.add('about')
    // ABOUT.textContent = 'About'
    // NAV.append(ABOUT)

    // CONTACT.classList.add('contact')
    // CONTACT.textContent = 'Contact'
    // CONTACT.style.backgroundColor = 'pink'
    // NAV.append(CONTACT)

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    contactInfo.textContent = 'Call us at: (555) 123-4567'
    MAIN.append(contactInfo)

    tabs()
}