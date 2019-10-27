const dat = new Date();
const datNow = `${dat.getFullYear()}-${dat.getMonth() + 1}-${dat.getDate()}`;
const sevenDaysAgo = `${dat.getFullYear()}-${dat.getMonth() + 1}-${dat.getDate()-7}`;

const input = document.querySelector('.intro__input');
const search = document.querySelector('.intro__search-button');
const animationTime = 300;
const framesCount = 20;
let counter = 0;
search.addEventListener('click', () => {
    event.preventDefault();
    const q = input.value;
    // if (counter > 0) {
    //   console.log(counter);
    //   const list = document.querySelector('.results__list');
    //   const card = document.querySelectorAll('.card');
    //   while (card) {
    //     card.forEach(() => { item.removeChild(item) });
    //   }
    // }
    localStorage.setItem('title', JSON.stringify(q));

    var url = 'https://newsapi.org/v2/everything?' +
        'language=ru&' +
        `q=${q}&` +
        `from=${datNow}&` +
        `to=${sevenDaysAgo}&` +
        'pageSize=100&' +
        'apiKey=0ebc0f8cec61442e8c50454fc5eafded';

    var req = new Request(url);
    function getInitialCards() {
      renderLoad(true);
      fetch(req)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
          const articles = data.articles;
          localStorage.setItem('articles', JSON.stringify(articles));
          if (articles.length === 0) {
            const notFound = document.querySelector('.not-found');
            notFound.classList.remove('not-found_hide');
            results.classList.add('results_hidden');
          } else {
            new Cardlist(document.querySelector('.results__list'), JSON.parse(localStorage.getItem('articles')));

            const total = data.totalResults;
            localStorage.setItem('total', JSON.stringify(total));


            const dates = articles.map((item) => {
              const weekDay = new Date(item.publishedAt);
              return weekDay.getDay()
            });
            const sun = dates.filter( (item) => {return item === 0});
            const sunCount = `${sun.length}`;
            localStorage.setItem('sun', JSON.stringify(sunCount));
            const mon = dates.filter( (item) => {return item === 1});
            const monCount = `${mon.length}`;
            localStorage.setItem('mon', JSON.stringify(monCount));
            const tue = dates.filter( (item) => {return item === 2});
            const tueCount = `${tue.length}`;
            localStorage.setItem('tue', JSON.stringify(tueCount));
            const wed = dates.filter( (item) => {return item === 3});
            const wedCount = `${wed.length}`;
            localStorage.setItem('wed', JSON.stringify(wedCount));
            const thu = dates.filter( (item) => {return item === 4});
            const thuCount = `${thu.length}`;
            localStorage.setItem('thu', JSON.stringify(thuCount));
            const fri = dates.filter( (item) => {return item === 5});
            const friCount = `${fri.length}`;
            localStorage.setItem('fri', JSON.stringify(friCount));
            const sat = dates.filter( (item) => {return item === 6});
            const satCount = `${sat.length}`;
            localStorage.setItem('sat', JSON.stringify(satCount));

            const titles = articles.map((item) => {
                return item.title
            });
            const titleCount = titles.filter((item) => {return item.toLowerCase().includes(`${q}`.toLowerCase())});
            localStorage.setItem('titles', JSON.stringify(titleCount.length));
          }
      })
        .catch(err => {
          console.log(err);
          // renderLoad(false);
          const notFound = document.querySelector('.not-found');
          notFound.classList.remove('not-found_hide');
          preloader.classList.add('preloader_hidden');

        })
        .finally(() => {
          renderLoad(false);
          let coordY = document.querySelector('#load').getBoundingClientRect().top + window.pageYOffset;
          let scroller = setInterval(function() {
            let scrollBy = coordY / framesCount;
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
              window.scrollBy(0, scrollBy);
            } else {
              window.scrollTo(0, coordY);
              clearInterval(scroller);
            }
          }, animationTime / framesCount);});
    }
    getInitialCards();
    return counter += 1;
});

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


class Card {
  constructor(imageUrl, newsDate, newsTitle, newsText, newsSource, newsSourceUrl) {
    this.cardElement = this.create(imageUrl, newsDate, newsTitle, newsText, newsSource, newsSourceUrl);
  }

  create(imageUrl, newsDate, newsTitle, newsText, newsSource, newsSourceUrl) {
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.classList.add('card__image');
    image.setAttribute('src', `${imageUrl}`);
    const description = document.createElement('div');
    description.classList.add('card__description');
    const date = document.createElement('p');
    date.classList.add('card__date');
    date.textContent = `${newsDate}`;
    const title = document.createElement('h3');
    title.classList.add('card__title');
    title.textContent = `${newsTitle}`;
    const text = document.createElement('p');
    text.classList.add('card__text');
    text.textContent = `${newsText}`;
    const source = document.createElement('a');
    source.classList.add('card__source');
    source.setAttribute('href', `${newsSourceUrl}`)
    source.textContent = `${newsSource}`;

    description.appendChild(date);
    description.appendChild(title);
    description.appendChild(text);
    description.appendChild(source);
    card.appendChild(image);
    card.appendChild(description);

    return card
  }
}

class Cardlist {
    constructor(container, array) {
      this.container = container;
      this.cardList = array;
      this.render(array);
      this.moreCards();
    }
  
    addCard(imageUrl, newsDate, newsTitle, newsText, newsSource, newsSourceUrl) {
      const { cardElement } = new Card(imageUrl, newsDate, newsTitle, newsText, newsSource, newsSourceUrl);
  
      this.container.appendChild(cardElement);
    }
  
    render(array) {
        array.slice(0, 3).forEach(element => {
            this.addCard(element.urlToImage, element.publishedAt, element.title, element.description, element.source.name, element.url);
        });
    }

    array(arr, dif) {
        const array = arr.filter((item) => {
            return !dif.includes(item)
        });
        const bar = array.slice(0, 3);
        return bar
    }

    moreCards() {
        const button = document.querySelector('.results__button');
        const added = this.cardList.slice(0, 3);
        const array = this.cardList;
        button.addEventListener('click', () => {
            if (added.length !== array.length) {
                const bar = this.array(array, added)
                this.render(bar);
                bar.forEach(element => {
                    return added.push(element)
                });
                console.log(added);
                this.array(array, added);
                if (added.length === array.length) { 
                    button.classList.add('results__button_hide') 
                }
            }
        });
    }

    clearList() {
      const list = document.querySelector('.results__list');
      const card = document.querySelectorAll('.card');
      list.removeChild(card);
    }
}




function renderResult() {
}

const preloader = document.querySelector('.preloader');
const results = document.querySelector('.results');

function renderLoad(load) {
  if(load) {
    preloader.classList.remove('preloader_hidden');
    results.classList.add('results_hidden');
  } else {
    preloader.classList.add('preloader_hidden');
    results.classList.remove('results_hidden');
  }
}