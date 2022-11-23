import beansImage from '../src/images/beans.jpeg'
import mealImage from '../src/images/meal.jpeg'
import meatballsImage from '../src/images/meatballs.jpeg'
import squashImage from '../src/images/squash.jpeg'
import tamalesImage from '../src/images/tamales.jpeg'

export function home() {
    const CONTENT = document.getElementById('content')

    const MAIN = document.createElement('div')
    const QUOTE = document.createElement('div')
    const QUOTE_2 = document.createElement('div')
    const IMG_1 = document.createElement('img')
    const IMG_2 = document.createElement('img')
    const IMG_3 = document.createElement('img')
    const IMG_4 = document.createElement('img')


    

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
