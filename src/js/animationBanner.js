import brasil from '../assets/bandeira.png';

var animationBanner = document.getElementById("animation-banner");
var hoverAnimationBanner = document.getElementById("hover-animation-banner");
var hoverContent = document.getElementById("hover-banner-content");


export function setAnimationBanner() {
  animationBanner.addEventListener("mouseover", applyHover);
  animationBanner.addEventListener("mouseleave", revokeHover);
  setContent();
  hoverAnimationBanner.style["opacity"] = "0";
}

function setContent() {
  let myName = document.createElement('span');
  myName.innerHTML = 'Fernando Koji Yamashiro'
  myName.style['fontSize'] = '3vw';
  let myJob = document.createElement('span');
  myJob.innerHTML = 'Programador Web'
  myJob.style['fontSize'] = '2vw';
  myJob.style["margin-bottom"] = '5px';
  let brasilFlag = document.createElement('img');
  brasilFlag.src = brasil;
  brasilFlag.style["width"] = "1.2vw"
  brasilFlag.style["height"] = "auto";
  brasilFlag.style["margin-right"] = "4px";
  let myLocal = document.createElement('span');
  myLocal.innerHTML = 'Brasil, Dourados - MS'
  myLocal.style['fontSize'] = '1.2vw';
  myLocal.style['paddingTop'] = '3px';
  hoverContent.appendChild(myName);
  hoverContent.appendChild(document.createElement('br'));
  hoverContent.appendChild(myJob);
  hoverContent.appendChild(document.createElement('br'));
  hoverContent.appendChild(brasilFlag);
  hoverContent.appendChild(myLocal);
}

function applyHover() {
  hoverAnimationBanner.style["opacity"] = "0.5";
}

function revokeHover() {
  // animationBanner.style["opacity"] = "1";
  hoverAnimationBanner.style["opacity"] = "0";
}