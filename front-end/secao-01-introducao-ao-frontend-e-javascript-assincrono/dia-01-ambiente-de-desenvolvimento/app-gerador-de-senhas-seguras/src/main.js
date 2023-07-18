import { nanoid } from 'nanoid';

const btnGenerate = document.querySelector('button');
const newPasswordHere = document.querySelector('h2');

btnGenerate.addEventListener('click', () => {
  newPasswordHere.innerHTML = nanoid();
});
