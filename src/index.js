import { toolbarComponent, sideMenuComponent } from './toolbar'
import icon from './assets/headIcon.png'
import { footerText } from './footer'

// document.getElementsByTagName('link')[0].href = icon;
// document.getElementById('toolbar').appendChild(toolbarComponent());
// document.body.appendChild(sideMenuComponent());
document.getElementById('footer-text').innerHTML = footerText();
