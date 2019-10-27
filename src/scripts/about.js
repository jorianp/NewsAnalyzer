var url = 'https://api.github.com/repos/jorianp/NewsAnalyzer/commits';

var req = new Request(url);

    function getInitialCards() {
        // renderLoad(true);
        fetch(req)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((data) => {
            new Cardlist(document.querySelector('.slider__list'), data);
            console.log(data);
        })
          .catch(err => {
            console.log(err);
          })
      }
    
      getInitialCards();
    
    // fetch(req)
    //     .then(function(response) {
    //         console.log(response.json());
    //     })
    
    
    class Card {
        constructor(commitDate, avatar, name, email, commit) {
        this.cardElement = this.create(commitDate, avatar, name, email, commit);
        }
    
        create(commitDate, avatar, name, email, commit) {
            const commitCard = document.createElement('div');
            commitCard.classList.add('commit');
            commitCard.classList.add('swiper-slide');
            const date = document.createElement('p');
            date.classList.add('commit__date');
            date.textContent = `${commitDate}`;
            const main = document.createElement('div');
            main.classList.add('commit__main');
            const image = document.createElement('img');
            image.classList.add('commit__avatar');
            image.setAttribute('src', `${avatar}`);
            const head = document.createElement('div');
            head.classList.add('commit__head');
            const mainName = document.createElement('p');
            mainName.classList.add('commit__name');
            mainName.textContent = name;
            const mainMail = document.createElement('p');
            mainMail.classList.add('commit__mail');
            mainMail.textContent = email;
            const text = document.createElement('p');
            text.classList.add('commit__text');
            text.textContent = `${commit}`;
            
            head.appendChild(mainName);
            head.appendChild(mainMail);
            main.appendChild(image);
            main.appendChild(head);
            commitCard.appendChild(date);
            commitCard.appendChild(main);
            commitCard.appendChild(text);
    
            return commitCard
        }
    }
    
    class Cardlist {
      constructor(container, array) {
        this.container = container;
        this.cardList = array;
        this.render();
      }
    
      addCard(commitDate, avatar, name, email, commit) {
        const { cardElement } = new Card(commitDate, avatar, name, email, commit);
        this.container.appendChild(cardElement);
      }
    
      render() {
          this.cardList.forEach(element => {
              this.addCard(element.commit.committer.date, element.committer.avatar_url, element.commit.committer.name, element.commit.committer.email, element.commit.message);
          });
      }
    }