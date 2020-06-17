// import _ from 'lodash';
import '../style.css';
import menuIcon from '../assets/menu-24px.svg'

// var menu = {
//   state: false,
//   get text() {
//     return menu.state ?  "Aberto" : "Fechado";
//   },
//   get getState() { 
//     return this.state;
//   },
//  /*  set setState(x) {
//     this.state = x;
//   } */
// }

export function setSideMenu() {
  const myIcon = new Image();
  myIcon.src = menuIcon;
  let menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.appendChild(myIcon);
  document.getElementById('menu-icon').appendChild(menuButton);
  document.getElementById('menu-side-icon').onmouseover = openSideMenu;
  
  setLanguageSelection();
  

}

function closeMenu() {
  document.getElementById("side-menu").style["width"] = '0';
}

function setLanguageSelection() {
  let flagButton = document.createElement('select');
  let option1 = document.createElement('option');
  option1.value = 'pt-br';
  option1.innerHTML = 'pt-br';
  let option2 = document.createElement('option');
  option2.value = 'en-us';
  option2.innerHTML = 'en-us';
  flagButton.appendChild(option1);
  flagButton.appendChild(option2);
  flagButton.onchange = openSelectFlag;
  document.getElementById('language-select').appendChild(flagButton);
}

function openSelectFlag() {
  console.log("flag select")
}

function openSideMenu() {
  document.getElementById("side-menu").style["width"] = '20%';
  document.getElementById("side-menu").addEventListener("mouseleave", closeMenu);
  
}
