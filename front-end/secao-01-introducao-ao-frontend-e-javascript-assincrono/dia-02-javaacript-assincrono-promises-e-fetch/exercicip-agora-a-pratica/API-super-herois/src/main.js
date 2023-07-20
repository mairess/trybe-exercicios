import Swal from 'sweetalert2';
import './style.css';

const btnSortear = document.querySelector('button');
const paragraph = document.querySelector('p');
const image = document.querySelector('img');

btnSortear.addEventListener('click', () => {
    const randomId = Math.floor(Math.random() * 731) + 1;
    const superHeroAPI = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomId}.json`
    fetch(superHeroAPI)
    .then((response) => response.json())
    .then((data) => {
        const { name, images: { md } } = data;
        image.style.borderRadius = '5px';
        image.style.border = '1px solid white';
        paragraph.innerHTML = name;
        image.setAttribute('src', md)
        console.log(md);
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não encontrei uma super ou super, tente novamente!',
          })
        console.log(error.message);
    });
});
