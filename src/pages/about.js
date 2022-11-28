import { tabs } from "../functions/tabs"

export function about() {

    const CONTENT = document.querySelector('#content')
    const MAIN = document.createElement('div')

    const aboutBtn = document.querySelector('.about')
    aboutBtn.style.borderBottom = 'none'

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    const aboutHeading = document.createElement('div')
    aboutHeading.classList.add('about-heading')
    aboutHeading.textContent = 'Meet the Chef!'
    MAIN.append(aboutHeading)

    const chefImg = document.createElement('img')
    chefImg.classList.add('chef-img')
    chefImg.src = "../src/images/1qZT.gif"
    MAIN.append(chefImg)

    const info = document.createElement('div')
    info.classList.add('info')
    info.textContent = 'Bucky has been cooking with organic vegetables since 2021.'
    MAIN.append(info)

    tabs()
}