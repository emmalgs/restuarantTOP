export function header() {
    const CONTENT = document.querySelector('#content')
    const HEADER = document.createElement('div')

    HEADER.classList.add('header')
    HEADER.textContent = `BUCKY'S ONE-STOP`
    CONTENT.appendChild(HEADER)
}