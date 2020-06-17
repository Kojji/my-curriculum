import { setSideMenu } from './sideMenu'
import icon from './assets/headIcon.png'
import { setFooter } from './footer'

document.getElementsByTagName('link')[0].href = icon;
setFooter();
setSideMenu();
