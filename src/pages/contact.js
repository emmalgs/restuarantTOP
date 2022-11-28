import { tabs } from "../functions/tabs"

export function contact() {

    const CONTENT = document.querySelector('#content')
    const MAIN = document.createElement('div')

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    contactInfo.textContent = 'Call us at: (555) 123-4567'
    MAIN.append(contactInfo)

    const GIF = document.createElement('img')
    GIF.src = "../src/images/1qZT.gif"
    contactInfo.append(GIF)
    

    tabs()
}