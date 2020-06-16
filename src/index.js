import { toolbarComponent, sideMenuComponent } from './toolbar'
import icon from './assets/headIcon.png'

document.getElementsByTagName('link')[0].href = icon;
document.getElementById('toolbar').appendChild(toolbarComponent());
document.body.appendChild(sideMenuComponent());
