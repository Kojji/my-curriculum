var animationBanner = document.getElementById("animation-banner");

export function setAnimationBanner() {
  animationBanner.addEventListener("mouseover", applyHover);
  animationBanner.addEventListener("mouseleave", revokeHover);
}

function applyHover() {
  animationBanner.style["opacity"] = "0.5";
}

function revokeHover() {
  animationBanner.style["opacity"] = "1";
}