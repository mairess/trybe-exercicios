
import './style.css';

const btn = document.querySelector('button');
const API_URL = 'https://dummyjson.com/quotes/random';
const quoteParagraph = document.getElementById('quote');
const authorParagraph = document.querySelector('h3');
const errorParagraph = document.getElementById('error');

btn.addEventListener('click', async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const { quote, author } = data;

        quoteParagraph.innerText = quote;
        authorParagraph.innerText = author;
        errorParagraph.innerText = '';
    } catch (error) {
        errorParagraph.innerText = `Error getting quote: ${error.message}`;
        quoteParagraph.innerText = '';
        authorParagraph.innerText = '';
    }
});