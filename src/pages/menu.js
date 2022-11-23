export function menu() {
    const CONTENT = document.querySelector('#content')

    const HEADER = document.createElement('div')
    const SIDEBAR = document.createElement('div')
    const NAV = document.createElement('div')
    const MENU = document.createElement('div')
    const ABOUT = document.createElement('div')
    const CONTACT = document.createElement('div')
    const MAIN = document.createElement('div')
    const DINNER = document.createElement('div')
    const menuItem = document.createElement('div')
    const price = document.createElement('div')
    const menuPic = document.createElement('img')

    HEADER.classList.add('header')
    HEADER.textContent = `BUCKY'S ONE-STOP`
    CONTENT.appendChild(HEADER)

    SIDEBAR.classList.add('sidebar')
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

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)
}