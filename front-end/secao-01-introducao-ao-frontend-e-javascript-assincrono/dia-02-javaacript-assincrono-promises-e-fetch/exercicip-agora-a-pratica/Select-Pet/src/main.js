import './style.css';

const randomDog = document.getElementById('randomDog');
const randomCat = document.getElementById('randomCat');
const surpriseMe = document.getElementById('surpriseMe');
const randomPet = document.querySelector('img');

const dogsAPI = 'https://dog.ceo/api/breeds/image/random';
const catsAPI = 'https://api.thecatapi.com/v1/images/search';

randomDog.addEventListener('click', () => {
  fetch(dogsAPI).then((response) => response.json())
    .then(({ message }) => {
      randomPet.setAttribute('width', '600px');
      randomPet.setAttribute('src', message);
    });
});
