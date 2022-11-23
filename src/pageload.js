import beansImage from '../src/images/beans.jpeg'
import mealImage from '../src/images/meal.jpeg'
import meatballsImage from '../src/images/meatballs.jpeg'
import squashImage from '../src/images/squash.jpeg'
import tamalesImage from '../src/images/tamales.jpeg'

export function pageload() {
    const CONTENT = document.getElementById('content')

    const HEADER = document.createElement('div')
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

    QUOTE.classList.add('quote')
    QUOTE.textContent = `"Best hot food this side of I-5"`
    MAIN.append(QUOTE)

    QUOTE_2.classList.add('quote-2')
    QUOTE_2.textContent = `"Tasted Fine."`
    MAIN.append(QUOTE_2)


    IMG_1.src = squashImage
    IMG_1.classList.add('img-1')
    MAIN.appendChild(IMG_1)

    IMG_2.src = meatballsImage
    IMG_2.classList.add('img-2')
    MAIN.appendChild(IMG_2)

    IMG_3.src = tamalesImage
    IMG_3.classList.add('img-3')
    MAIN.appendChild(IMG_3)

    IMG_4.src = mealImage
    IMG_4.classList.add('img-4')
    MAIN.appendChild(IMG_4)
}
