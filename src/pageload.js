

export function pageload() {
    const CONTENT = document.getElementById('content')

    const HEADER = document.createElement('div')
    const NAV = document.createElement('div')
    const MENU = document.createElement('div')
    const ABOUT = document.createElement('div')
    const CONTACT = document.createElement('div')
    const MAIN = document.createElement('div')
    const QUOTE = document.createElement('div')
    const IMG_1 = document.createElement('img')
    const IMG_2 = document.createElement('img')
    const IMG_3 = document.createElement('img')

    HEADER.classList.add('header')
    CONTENT.appendChild(HEADER)

    NAV.classList.add('nav')
    CONTENT.appendChild(NAV)

    MENU.classList.add('menu')
    NAV.append(MENU)

    ABOUT.classList.add('about')
    NAV.append(ABOUT)

    CONTACT.classList.add('contact')
    NAV.append(CONTACT)

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    QUOTE.classList.add('quote')
    MAIN.append(QUOTE)

    IMG_1.src = '../src/squash.jpeg'
    MAIN.appendChild(IMG_1)

    IMG_2.src = '../src/meatballs.jpeg'
    MAIN.appendChild(IMG_2)

    IMG_3.src = '../src/beans.jpeg'
    MAIN.appendChild(IMG_3)
}
