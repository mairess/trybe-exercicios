import './style.css';

const inputData = document.querySelector('input');
const searchBtn = document.querySelector('button');
const API_URL = 'https://api.exchangerate.host/latest?base=';
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
  Object.entries(currencies).forEach(([currency, rate]) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('currencyDiv');

    const iconImage = createImage();

    const decimalDigits = 3;
    const rateAdjusted = rate.toFixed(decimalDigits);
    const rateText = document.createElement('span');
    const currencyText = document.createElement('p');
    currencyText.innerText = `${currency}:`;
    rateText.innerText = `${rateAdjusted}`;

    newDiv.appendChild(iconImage);
    newDiv.appendChild(currencyText);
    newDiv.appendChild(rateText);

    board.appendChild(newDiv);
  });
};

searchBtn.addEventListener('click', async () => {
  const currency = inputData.value;
  board.innerText = '';
  valueReference.innerHTML = `Valores Referentes a 1 ${currency}`;
  const response = await fetch(API_URL + currency);
  const data = await response.json();
  const currencies = data.rates;
  createDiv(currencies);
});
