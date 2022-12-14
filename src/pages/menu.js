//rebuild page except for header

import { tabs } from "../functions/tabs"

export function menu() {

    const CONTENT = document.querySelector('#content')

    const menuBtn = document.querySelector('.menu')
    menuBtn.style.borderBottom = 'none'
    
    const MAIN = document.createElement('div')
    const DINNER = document.createElement('div')

    MAIN.setAttribute('id', 'main')
    CONTENT.append(MAIN)

    DINNER.classList.add('dinner-header')
    DINNER.textContent = 'DINNER'
    MAIN.append(DINNER)
    
    //menu items

    const menuItem1 = document.createElement('div')
    const menuItem1_desc = document.createElement('div')
    const price1 = document.createElement('div')

    menuItem1.classList.add('menu-item')
    menuItem1.textContent = 'Timothy Western Hay'
    MAIN.append(menuItem1)

    menuItem1_desc.classList.add('menu-desc')
    menuItem1_desc.textContent = 'Sun-dried on the plains of Northern California for the freshest grassy chew'
    menuItem1.append(menuItem1_desc)

    price1.classList.add('price')
    price1.textContent = '$9.99'
    MAIN.append(price1)

    tabs()
}