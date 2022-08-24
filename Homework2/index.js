import './index.css';
import {logPlugin} from "@babel/preset-env/lib/debug";


window.onload = function () {
    console.log(localStorage.length)
    if(localStorage.length === 0) {
        openCookie()
        const cookieButton = document.querySelector('.cookie-consent__button')
        cookieButton.addEventListener('click', rememberClick)
    }
}
function openCookie() {
    const container = document.createElement('div')
    container.className = 'cookie-consent'
    container.innerHTML = '<p class="cookie-consent__text">\n' +
        '            Мы используем файлы cookie для наилучшего представления нашего сайта\n' +
        '        </p>\n' +
        '        <button class="cookie-consent__button">Прекрасно</button>'
    document.body.append(container)
}
function rememberClick() {
    console.log('click and remember')
   const clickObject = {
       click: 'true'
   }
   localStorage.setItem(JSON.stringify(clickObject.click), 1)
    closeCookie()

}
function closeCookie() {
    const cookieContainer = document.querySelector('.cookie-consent')
    cookieContainer.remove()

}