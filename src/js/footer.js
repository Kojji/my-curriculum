var footer = document.getElementById('footer-text');

export function setFooter() {
  let date = new Date();
  footer.innerHTML = `${date.getFullYear()} - Fernando Koji`;
}
