// кнопка "Показать еще"
const more = document.querySelector('.results__button');
const results = document.querySelector('.results');
const list = document.querySelector('.results__list');
const searchButton = document.querySelector('.intro__search-button');

export { more, results };

export default class NewsList {
    constructor() {
        this.addToStorage = this.addToStorage.bind(this);
        this.render = this.render.bind(this);
        this.processing = this.processing.bind(this);
        this.remove = this.remove.bind(this);
        this.preloader = this.preloader.bind(this);
        this.renderError = this.renderError.bind(this);
        this.renderNotFoundHide = this.renderNotFoundHide.bind(this);
    }

    request() {
        more.addEventListener('click', this.render);
    }

    processing(data) {
        this.data = data;
        if (this.data.articles.length === 0) {
            this.renderNotFound();
        } else if (this.data.articles.length > 3) {
            this.renderNotFoundHide();
            more.classList.remove('button_disabled');
            results.classList.remove('results_hidden');
            list.classList.remove('results__list_bot');
            this.createCard(this.data.articles.splice(0, 3));
        } else {
            results.classList.remove('results_hidden');
            list.classList.add('results__list_bot');
            more.classList.add('button_disabled');
            this.createCard(this.data.articles);
            more.removeEventListener('click', this.showMore);
        }
    }

    render() {
        this.processing(this.data);
    }

    addToStorage(data) {
        localStorage.setItem('data', JSON.stringify(data));
        this.processing(JSON.parse(localStorage.getItem('data')));
    }

    createCard(data) {
        const list = document.querySelector('.results__list');
        data.forEach(el => {
            const card = document.createElement('div');
            card.classList.add('card');
            const image = document.createElement('img');
            image.classList.add('card__image');
            image.setAttribute('src', `${el.urlToImage}`);
            const description = document.createElement('div');
            description.classList.add('card__description');
            const date = document.createElement('p');
            date.classList.add('card__date');
            date.textContent = `${el.publishedAt}`;
            const title = document.createElement('h3');
            title.classList.add('card__title');
            title.textContent = `${el.title}`;
            const text = document.createElement('p');
            text.classList.add('card__text');
            text.textContent = `${el.description}`;
            const source = document.createElement('a');
            source.classList.add('card__source');
            source.setAttribute('href', `${el.url}`)
            source.textContent = `${el.source.name}`;
        
            description.appendChild(date);
            description.appendChild(title);
            description.appendChild(text);
            description.appendChild(source);
            card.appendChild(image);
            card.appendChild(description);

            return list.appendChild(card);
        });
    }

    remove() {
        localStorage.clear();
        more.removeEventListener('click', this.render);
        const list = document.querySelector('.results__list');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        results.classList.remove('.results_hidden');

        more.classList.add('button_disabled');
    }

    preloader() {
        const preloader = document.querySelector('.preloader');
        preloader.classList.remove('preloader_hidden');
        results.classList.add('results_hidden');
        searchButton.setAttribute('disabled', true);
        this.renderNotFoundHide();
    }

    preloaderHidden() {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader_hidden');
        searchButton.removeAttribute('disabled');
    }

    renderError(err) {
        const notFound = document.querySelector('.not-found');
        const notFoundTitle = document.querySelector('.not-found__title');
        const notFoundSubtitle = document.querySelector('.not-found__subtitle');
        notFound.classList.remove('not-found_hide');
        notFoundTitle.textContent = `${err}`;
        notFoundSubtitle.textContent = 'Кажется что-то пошло не так...';


        localStorage.clear();
    }

    renderNotFound() {
        const notFound = document.querySelector('.not-found');
        notFound.classList.remove('not-found_hide');
        results.classList.add('results_hidden');

        localStorage.clear();
    }

    renderNotFoundHide() {
        const notFound = document.querySelector('.not-found');
        notFound.classList.add('not-found_hide');
    }
}