export function setFooter() {
  let date = new Date();
  document.getElementById('footer-text').innerHTML = `${date.getFullYear()} - Fernando Koji`;
}
