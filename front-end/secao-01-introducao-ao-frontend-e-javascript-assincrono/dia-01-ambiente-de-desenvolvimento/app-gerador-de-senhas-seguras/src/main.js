import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const btnGenerate = document.querySelector('button');
const newPasswordHere = document.querySelector('h2');

btnGenerate.addEventListener('click', () => {
  newPasswordHere.innerHTML = nanoid();
});
newPasswordHere.addEventListener('click', () => {
  copy(newPasswordHere.innerHTML);
  alert('Copiado'); // eslint-disable-line
});
