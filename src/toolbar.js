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

function openSideMenu() {
  document.getElementById("sideMenu").style["width"] = '30%';
  menu.state =true
  /* if(menu.getState) menu.state = false;
  else menu.state =true; */
}

export function sideMenu() {
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
  let button = document.createElement('button');
  button.classList.add('toolbar-button');
  button.appendChild(myIcon);
  button.onmouseover = openSideMenu;

  let listElement = document.createElement('li');
  listElement.appendChild(button);

  let iconList = document.createElement('ul');
  iconList.appendChild(listElement);
  iconList.classList.add('toolbar');

  
  return iconList;
}


