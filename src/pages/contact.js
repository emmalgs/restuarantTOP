import { tabs } from "../functions/tabs"

export function contact() {

    const CONTENT = document.querySelector('#content')
    const MAIN = document.createElement('div')

    const contactBtn = document.querySelector('.contact')
    contactBtn.style.borderBottom = 'none'

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    contactInfo.textContent = 'Call us at: (555) 123-4567'
    MAIN.append(contactInfo)

    const GIF = document.createElement('img')
    GIF.src = "../src/images/1qZT.gif"
    contactInfo.append(GIF)
    
    const MAP = document.createElement('img')
    MAP.classList.add('map')
    MAP.src = "../src/images/map.jpeg"
    MAIN.append(MAP)

    tabs()
}