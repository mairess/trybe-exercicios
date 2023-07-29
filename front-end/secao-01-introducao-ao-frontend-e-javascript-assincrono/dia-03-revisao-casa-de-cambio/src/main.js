import './style.css';
import Swal from 'sweetalert2';

const inputData = document.querySelector('input');
const searchBtn = document.querySelector('button');
const API_URL = 'https://api.exchangerate.host/latest?base=';
const API_SYMBOLS = 'https://api.exchangerate.host/symbols';
const board = document.getElementById('currencyBoard');
const valueReference = document.getElementById('valueReference');

const createImage = () => {
  const iconPath = '../images/coins-svgrepo-com-1.svg';
  const iconImg = document.createElement('img');
  iconImg.src = iconPath;
  return iconImg;
};

const createDiv = (currencies) => {
  board.innerHTML = '';
  Object.entries(currencies).forEach(([moeda, rate]) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('currencyDiv');

    const iconImage = createImage();

    const decimalDigits = 3;
    const rateAdjusted = rate.toFixed(decimalDigits);
    const rateText = document.createElement('span');
    const currencyText = document.createElement('p');
    currencyText.innerText = `${moeda}:`;
    rateText.innerText = `${rateAdjusted}`;

    newDiv.appendChild(iconImage);
    newDiv.appendChild(currencyText);
    newDiv.appendChild(rateText);

    board.appendChild(newDiv);
  });
};

const verifyCurrency = async (moeda) => {
  const response = await fetch('https://api.exchangerate.host/symbols');
  const data = await response.json();
  const { symbols } = data;
  const validSymbols = Object.keys(symbols);
  return validSymbols.includes(moeda);
};

searchBtn.addEventListener('click', async () => {
  const moeda = inputData.value;
  if (!moeda) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar uma moeda!',
    });
  }

  const isValidCurrency = await verifyCurrency();

  if (!isValidCurrency) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Moeda inexistente!',
    });
  }

  board.innerText = '';
  valueReference.innerHTML = `Valores Referentes a 1 ${moeda}`;
  const response = await fetch(API_URL + moeda);
  const data = await response.json();
  const currencies = data.rates;
  createDiv(currencies);
});
