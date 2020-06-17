import { setSideMenu } from './js/sideMenu'
import icon from './assets/headIcon.png'
import { setFooter } from './js/footer'
import { setAnimationBanner } from './js/animationBanner'

document.getElementsByTagName('link')[0].href = icon;
setAnimationBanner();
setFooter();
setSideMenu();
