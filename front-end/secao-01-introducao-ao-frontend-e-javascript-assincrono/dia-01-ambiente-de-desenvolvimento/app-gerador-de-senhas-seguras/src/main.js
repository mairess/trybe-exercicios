import { nanoid } from 'nanoid';
import './style.css';

const btnGenerate = document.querySelector('button');
const newPasswordHere = document.querySelector('h2');

btnGenerate.addEventListener('click', () => {
  newPasswordHere.innerHTML = nanoid();
});
