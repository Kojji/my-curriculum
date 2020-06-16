import { toolbarComponent, sideMenuComponent } from './toolbar'
import icon from './assets/headIcon.png'
import { footerText } from './footer'
import menuIcon from './assets/menu-24px.svg'

document.getElementsByTagName('link')[0].href = icon;
// document.getElementById('toolbar').appendChild(toolbarComponent());
// document.body.appendChild(sideMenuComponent());
document.getElementById('footer-text').innerHTML = footerText();


const myIcon = new Image();
myIcon.src = menuIcon;
let menuButton = document.createElement('button');
menuButton.classList.add('toolbar-button');
menuButton.appendChild(myIcon);
//menuButton.onmouseover = openSideMenu;
document.getElementById('menu-icon').appendChild(menuButton);
