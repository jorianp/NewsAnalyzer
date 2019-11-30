import Swiper from 'swiper';

export default class Commits { 

    constructor() {
        this.createCommit = this.createCommit.bind(this);
    }

    createCommit(data) {
        const wrapper = document.querySelector('.swiper-wrapper');
        data.forEach(item => {
            const commitCard = document.createElement('div');
            commitCard.classList.add('swiper-slide');
            const date = document.createElement('p');
            date.classList.add('commit__date');
            date.textContent = item.commit['committer']['date'];
            const main = document.createElement('div');
            main.classList.add('commit__main');
            const image = document.createElement('img');
            image.classList.add('commit__avatar');
            image.setAttribute('src', `${item.committer.avatar_url}`);
            const head = document.createElement('div');
            head.classList.add('commit__head');
            const mainName = document.createElement('p');
            mainName.classList.add('commit__name');
            mainName.textContent = item.commit.committer.name;
            const mainMail = document.createElement('p');
            mainMail.classList.add('commit__mail');
            mainMail.textContent = item.commit.committer.email;
            const text = document.createElement('p');
            text.classList.add('commit__text');
            text.textContent = item.commit.message;
            
            head.appendChild(mainName);
            head.appendChild(mainMail);
            main.appendChild(image);
            main.appendChild(head);
            commitCard.appendChild(date);
            commitCard.appendChild(main);
            commitCard.appendChild(text);


            wrapper.appendChild(commitCard);
        });
        this._ourSlider();
      }

      renderError(err) {
        const notFoundTitle = document.querySelector('.not-found__title');
        const notFoundSubtitle = document.querySelector('.not-found__subtitle');
        notFound.classList.remove('not-found_hide');
        notFoundTitle.textContent = `${err}`;
        notFoundSubtitle.textContent = 'Кажется что-то пошло не так...';
      }

      _ourSlider() {
        const swiper = new Swiper('.swiper-container', {
            spaceBetween: 16,
            centeredSlides: true,
            
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                loop: false
              },

              768: {
                slidesPerView: 2,
                loop: false,
                centeredSlides: false,
              },

              1024: {
                slidesPerView: 2.7,
                loop: true,
                centeredSlides: true,
              },

              1440: {
                slidesPerView: 3.5,
                loop: true,
                centeredSlides: true,
              },

              2560: {
                slidesPerView: 6.5,
                loop: true,
                centeredSlides: true,
              }
            }
        });
    }
}

