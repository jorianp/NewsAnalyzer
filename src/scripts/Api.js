import {now, sevenDaysAgo} from './time'

const animationTime = 30;
const framesCount = 200;

const apiKey = '0ebc0f8cec61442e8c50454fc5eafded';
const apiData = {
    url: 'https://newsapi.org/v2/everything?',
    urlParam: `language=ru&from=${now}&to=${sevenDaysAgo}&pageSize=100&apiKey=${apiKey}`
}

export default class Api {
    constructor() {
    }

    news(query, preloader, render, result, error) {
        preloader();
        fetch(`${apiData.url}q=${query}&${apiData.urlParam}`)
            .then(function (res) {
                if (res.ok) {
                    localStorage.setItem('query', query);
                    return res.json();
                }
                return Promise.reject(`Код ошибки: ${res.status}`);
            })
            .then((data) => {
                render(data);
            })
            .catch((err) => {
                error(err);
            })
            .finally(() => {
                result();
                animation();
                animationNot();
            });
    }
}


function animation() {
    const coordY = document.querySelector('#load').getBoundingClientRect().top + window.pageYOffset;
    const scroller = setInterval(function() {
        const scrollBy = coordY / framesCount;
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            window.scrollBy(0, scrollBy);
        } else {
            window.scrollTo(0, coordY);
            clearInterval(scroller);
        }
    }, animationTime / framesCount);
}

function animationNot() {
    const coordY = document.querySelector('#not-found').getBoundingClientRect().top + window.pageYOffset;
    const scroller = setInterval(function() {
        const scrollBy = coordY / framesCount;
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            window.scrollBy(0, scrollBy);
        } else {
            window.scrollTo(0, coordY);
            clearInterval(scroller);
        }
    }, animationTime / framesCount);
}