import { tabs } from "../functions/tabs"

export function about() {

    const CONTENT = document.querySelector('#content')
    const MAIN = document.createElement('div')

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    const info = document.createElement('div')
    info.classList.add('info')
    info.textContent = 'This here is a restaurant. We craft food with our little paws.'
    MAIN.append(info)

    tabs()
}