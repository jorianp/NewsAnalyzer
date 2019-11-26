import {ago, day, month, oneDay} from './time'

// Массив чисел дней
const week = arrOfDays(ago);
const days = daysWeek(ago);
// Массив данных полученных из API через localStorage
const data = JSON.parse(localStorage.getItem('data'));

// Массив дат полученных из API
const dayOfArticle = data.articles.map((el) => { return el.publishedAt });
const renderedDate = dayOfArticle.map((el) => { return new Date(el).getDate() });


// Количество заголовков содердащих поисковый запрос
const countTitles = 
    data.articles.filter(el => {
        return el.title.toLowerCase().includes(`${localStorage.getItem('query').toLowerCase()}`) }
    ).length;

// Получение массива чисел дней
function arrOfDays(a) {
    let arr = [];
    for (let i = 0; i < 7; i += 1) {
        arr.push(new Date(ago.getTime() + oneDay*i).getDate());
    }
    return arr
}

// Получение массива дней недели 
function daysWeek(a) {
    let arr = [];
    for (let i = 0; i < 7; i += 1) {
        arr.push(new Date(ago.getTime() + oneDay*i).getDay());
    }
    return arr
}

// Количество новостей за каждый из дней
function newsInDay(n) {
    return renderedDate.filter((el) => {
        return el == n
    }).length
}

// День недели 
function dayOfWeek() {
    return days.map((el) => { return day[el] })
}


// Общая информация
document.querySelector('.weekly__title').textContent = `Вы спросили: «${localStorage.getItem('query')}»`
document.querySelector('.weekly__number_total').textContent = data.totalResults;
document.querySelector('.weekly__number_title').textContent = countTitles;
document.querySelector('.daily__name').textContent = `Дата (${month[new Date().getMonth()]})`;

// Первый день в списке
document.querySelector('.table__progress_mon').setAttribute('style', `width: ${newsInDay(week[0])}%`);
document.querySelector('.table__value_mon').textContent = newsInDay(week[0]);
document.querySelector('.first-day').textContent = `${week[0]}, ${dayOfWeek()[0]}`;

// Второй день в списке
document.querySelector('.table__progress_tue').setAttribute('style', `width: ${newsInDay(week[1])}%`);
document.querySelector('.table__value_tue').textContent = newsInDay(week[1]);
document.querySelector('.second-day').textContent = `${week[1]}, ${dayOfWeek()[1]}`;

// Третий день в списке
document.querySelector('.table__progress_wed').setAttribute('style', `width: ${newsInDay(week[2])}%`);
document.querySelector('.table__value_wed').textContent = newsInDay(week[2]);
document.querySelector('.third-day').textContent = `${week[2]}, ${dayOfWeek()[2]}`;

// Четвертый день в списке
document.querySelector('.table__progress_thu').setAttribute('style', `width: ${newsInDay(week[3])}%`);
document.querySelector('.table__value_thu').textContent = newsInDay(week[3]);
document.querySelector('.fourth-day').textContent = `${week[3]}, ${dayOfWeek()[3]}`;

// Пятый день в списке
document.querySelector('.table__progress_fri').setAttribute('style', `width: ${newsInDay(week[4])}%`);
document.querySelector('.table__value_fri').textContent = newsInDay(week[4]);
document.querySelector('.fifth-day').textContent = `${week[4]}, ${dayOfWeek()[4]}`;

// Шестой день в списке
document.querySelector('.table__progress_sat').setAttribute('style', `width: ${newsInDay(week[5])}%`);
document.querySelector('.table__value_sat').textContent = newsInDay(week[5]);
document.querySelector('.sixth-day').textContent = `${week[5]}, ${dayOfWeek()[5]}`;

// Седьмой день в списке
document.querySelector('.table__progress_sun').setAttribute('style', `width: ${newsInDay(week[6])}%`);
document.querySelector('.table__value_sun').textContent = newsInDay(week[6]);
document.querySelector('.seventh-day').textContent = `${week[6]}, ${dayOfWeek()[6]}`;