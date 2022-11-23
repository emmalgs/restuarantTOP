import { tabs } from "./tabs"

export function pageload() {
    const CONTENT = document.getElementById('content')

    const SIDEBAR = document.createElement('div')
    const NAV = document.createElement('div')
    const MENU = document.createElement('div')
    const ABOUT = document.createElement('div')
    const CONTACT = document.createElement('div')
    const MAIN = document.createElement('div')
    const QUOTE = document.createElement('div')
    const QUOTE_2 = document.createElement('div')
    const IMG_1 = document.createElement('img')
    const IMG_2 = document.createElement('img')
    const IMG_3 = document.createElement('img')
    const IMG_4 = document.createElement('img')

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

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    QUOTE.classList.add('quote')
    QUOTE.textContent = `"Best hot food this side of I-5"`
    MAIN.append(QUOTE)

    QUOTE_2.classList.add('quote-2')
    QUOTE_2.textContent = `"Tasted Fine."`
    MAIN.append(QUOTE_2)


    IMG_1.src = "../src/images/squash.jpeg"
    IMG_1.classList.add('img-1')
    MAIN.appendChild(IMG_1)

    IMG_2.src = '../src/images/beans.jpeg'
    IMG_2.classList.add('img-2')
    MAIN.appendChild(IMG_2)

    IMG_3.src = '../src/images/meatballs.jpeg'
    IMG_3.classList.add('img-3')
    MAIN.appendChild(IMG_3)

    IMG_4.src = '../src/images/meal.jpeg'
    IMG_4.classList.add('img-4')
    MAIN.appendChild(IMG_4)

    tabs()
}