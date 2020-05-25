import _ from 'lodash';
import './style.css';

export function toolbarComponent() {
  const list = document.createElement('ul')

  let item = document.createElement('li')
  let seg = document.createElement('li')
  item.innerHTML = "Menu"
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  list.classList.add('toolbar');

  // const myIcon = new Image();
  // myIcon.src = icon;
  
  seg.innerHTML = "segundo" 
  list.appendChild(item);
  list.appendChild(seg);

  return list;
}