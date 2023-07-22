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

randomCat.addEventListener('click', () => {
  fetch(catsAPI).then((response) => response.json())
    .then((data) => {
      const link = data.map((info) => info.url);
      randomPet.setAttribute('width', '600px');
      randomPet.setAttribute('src', link);
    });
});

surpriseMe.addEventListener('click', () => {
  const getDog = fetch(dogsAPI).then((response) => response.json())
    .then(({ message }) => {
      randomPet.setAttribute('width', '600px');
      randomPet.setAttribute('src', message);
    });

  const getCat = fetch(catsAPI).then((response) => response.json())
    .then((data) => {
      const link = data.map((info) => info.url);
      randomPet.setAttribute('width', '600px');
      randomPet.setAttribute('src', link);
    });

  Promise.race([
    getCat,
    getDog,
  ]);
});
