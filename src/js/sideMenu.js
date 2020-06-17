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

var iconeMenu = document.getElementById('menu-icon');
var iconeMenuArea = document.getElementById('menu-side-icon');
var menu = document.getElementById("side-menu");
var selectLanguage = document.getElementById('language-select');

export function setSideMenu() {
  const myIcon = new Image();
  myIcon.src = menuIcon;
  let menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.appendChild(myIcon);
  iconeMenu.appendChild(menuButton);
  iconeMenuArea.onmouseover = openSideMenu;
  
  setLanguageSelection();
  

}

function closeMenu() {
  menu.style["width"] = '0';
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
  selectLanguage.appendChild(flagButton);
}

function openSelectFlag() {
  console.log("flag select")
}

function openSideMenu() {
  menu.style["width"] = '20%';
  menu.addEventListener("mouseleave", closeMenu);
}
