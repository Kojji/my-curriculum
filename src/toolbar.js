// import _ from 'lodash';
import './style.css';
import menuIcon from './assets/menu-24px.svg'

var menu = {
  state: false,
  get text() {
    return menu.state ?  "Aberto" : "Fechado";
  },
  get getState() { 
    return this.state;
  },
 /*  set setState(x) {
    this.state = x;
  } */
}

function openSelectFlag() {
  console.log("flag select")
}

function openSideMenu() {
  document.getElementById("sideMenu").style["width"] = '25%';
  menu.state =true
  /* if(menu.getState) menu.state = false;
  else menu.state =true; */
}

export function sideMenuComponent() {
  let sideMenu = document.createElement('div');
  sideMenu.setAttribute("id", "sideMenu");
  sideMenu.innerHTML = menu.text
  sideMenu.classList.add("sideMenu");
  sideMenu.style["width"] = 0;
  sideMenu.onmouseleave = () => {
    menu.state = false;
    sideMenu.style["width"] = 0;
  }
  return sideMenu
}

export function toolbarComponent() {

  const myIcon = new Image();
  myIcon.src = menuIcon;
  let menuButton = document.createElement('button');
  menuButton.classList.add('toolbar-button');
  menuButton.appendChild(myIcon);
  menuButton.onmouseover = openSideMenu;


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

  let menuElement = document.createElement('li');
  menuElement.appendChild(menuButton);
  menuElement.style["float"] = "left";
  
  let flagElement = document.createElement('li');
  flagElement.appendChild(flagButton);
  flagElement.style["float"] = "right";

  let iconList = document.createElement('ul');
  iconList.appendChild(menuElement);
  iconList.appendChild(flagElement);
  iconList.classList.add('toolbar');

  
  return iconList;
}


