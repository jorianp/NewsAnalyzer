import Api from './Api';
// import { results } from './NewsList';
import NewsList from './NewsList';

const newsList = new NewsList();

// window.onload = function () {
//     newsList.remove();
//     results.classList.add('results_hidden');
//     document.querySelector('.intro__input').value = '';
// }

const localData = localStorage.getItem('data');

if (localData) {
    newsList.verification(JSON.parse(localData));
    document.querySelector('.intro__input').value = `${localStorage.getItem('query')}`
    newsList.request();
}

function search(event) {
    event.preventDefault();
    const query = document.querySelector('.intro__input').value.trim();
    newsList.remove();
    new Api().news(query, newsList.preloader, newsList.addToStorage, newsList.preloaderHidden, newsList.renderError);
    newsList.request();
}

document.querySelector('.intro__search').addEventListener('submit', search);