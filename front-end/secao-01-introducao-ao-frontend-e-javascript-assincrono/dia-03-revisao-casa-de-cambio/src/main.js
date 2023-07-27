import './style.css';

const inputData = document.querySelector('input');
const searchBtn = document.querySelector('button');
const API_URL = 'https://api.exchangerate.host/latest?base=';
const board = document.getElementById('currencyBoard');

const createDiv = (currencies) => {
  Object.entries(currencies).forEach((element) => {
    const newDiv = document.createElement('div');
    newDiv.innerText = element;
    board.appendChild(newDiv);
  });
};

searchBtn.addEventListener('click', async () => {
  board.innerHTML = ' ';
  const currency = inputData.value;
  const response = await fetch(API_URL + currency);
  const data = await response.json();
  const currencies = data.rates;
  createDiv(currencies);
});
