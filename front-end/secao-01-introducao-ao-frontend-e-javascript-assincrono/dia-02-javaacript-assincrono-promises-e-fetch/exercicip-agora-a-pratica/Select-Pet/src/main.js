import './style.css';
import Swal from 'sweetalert2';

const randomDog = document.getElementById('randomDog');
const randomCat = document.getElementById('randomCat');
const surpriseMe = document.getElementById('surpriseMe');
const randomPet = document.querySelector('img');
const textMessageSwal = 'Não encontrei uma super ou super, tente novamente!';

const dogsAPI = 'https://dog.ceo/api/breeds/image/random';
const catsAPI = 'https://api.thecatapi.com/v1/images/search';

randomDog.addEventListener('click', () => {
  fetch(dogsAPI).then((response) => response.json())
    .then(({ message }) => {
      randomPet.setAttribute('width', '600px');
      randomPet.setAttribute('src', message);
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: textMessageSwal,
      });
      console.log(error.message);
    });
});

randomCat.addEventListener('click', () => {
  fetch(catsAPI).then((response) => response.json())
    .then((data) => {
      const link = data[0].url;
      randomPet.setAttribute('width', '600px');
      randomPet.setAttribute('src', link);
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: textMessageSwal,
      });
      console.log(error.message);
    });
});

surpriseMe.addEventListener('click', () => {
  Promise.any([
    fetch(dogsAPI),
    fetch(catsAPI),
  ]).then((response) => response.json())
    .then((data) => {
      const url = data.message || data[0].url;
      randomPet.src = url;
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Não encontrei uma super ou super, tente novamente!',
      });
      console.log(error.message);
    });
});
