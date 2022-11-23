import './style.css'
import { pageload } from './functions/pageload.js'

function component() {
 pageload()
 document.querySelector('.quote').textContent = 'THE HELL'
}

component()