console.log("IT'S ALIVE!!!!!")

import homepageStyles from './homepage.css'
import globalStyles from './global.css'
import menuStyles from './menu.css'
import homepage from './homepage'
import menu from './menu'
import about from './about'

//homepage()

//for testing
menu()
//about

const homeButton = document.querySelector('.btn-home')
homeButton.addEventListener('click', () => {
    homepage()
})

const menuButton = document.querySelector('.btn-menu')
menuButton.addEventListener('click', () => {
    menu()
})

const aboutButton = document.querySelector('.btn-about')
aboutButton.addEventListener('click', () => {
    about()
})