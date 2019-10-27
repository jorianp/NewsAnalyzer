// const total = document.querySelector('.weekly__number_total');
// const inTitles = document.querySelector('.weekly__number_title');
// const progressMon = document.querySelector('.table__progress_mon');
// const progressTue = document.querySelector('.table__progress_tue');
// const progressWed = document.querySelector('.table__progress_wed');
// const progressThu = document.querySelector('.table__progress_thu');
// const progressFri = document.querySelector('.table__progress_fri');
// const progressSat = document.querySelector('.table__progress_sat');
// const progressSun = document.querySelector('.table__progress_sun');
// const valueMon = document.querySelector('.table__value_mon');
// const valueTue = document.querySelector('.table__value_tue');
// const valueWed = document.querySelector('.table__value_wed');
// const valueThu = document.querySelector('.table__value_thu');
// const valueFri = document.querySelector('.table__value_fri');
// const valueSat = document.querySelector('.table__value_sat');
// const valueSun = document.querySelector('.table__value_sun');

document.querySelector('.weekly__title').textContent = `Вы спросили: «${localStorage.getItem('title').replace(/[\"]/gim, "")}»`
document.querySelector('.weekly__number_total').textContent = localStorage.getItem('total').replace(/[\"]/gim, "");
document.querySelector('.weekly__number_title').textContent = localStorage.getItem('titles').replace(/[\"]/gim, "");

document.querySelector('.table__progress_mon').setAttribute('style', `width: ${localStorage.getItem('mon').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_mon').textContent = localStorage.getItem('mon').replace(/[\"]/gim, "");

document.querySelector('.table__progress_tue').setAttribute('style', `width: ${localStorage.getItem('tue').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_tue').textContent = localStorage.getItem('tue').replace(/[\"]/gim, "");

document.querySelector('.table__progress_wed').setAttribute('style', `width: ${localStorage.getItem('wed').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_wed').textContent = localStorage.getItem('wed').replace(/[\"]/gim, "");

document.querySelector('.table__progress_thu').setAttribute('style', `width: ${localStorage.getItem('thu').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_thu').textContent = localStorage.getItem('thu').replace(/[\"]/gim, "");

document.querySelector('.table__progress_fri').setAttribute('style', `width: ${localStorage.getItem('fri').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_fri').textContent = localStorage.getItem('fri').replace(/[\"]/gim, "");

document.querySelector('.table__progress_sat').setAttribute('style', `width: ${localStorage.getItem('sat').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_sat').textContent = localStorage.getItem('sat').replace(/[\"]/gim, "");

document.querySelector('.table__progress_sun').setAttribute('style', `width: ${localStorage.getItem('sun').replace(/[\"]/gim, "")}%`);
document.querySelector('.table__value_sun').textContent = localStorage.getItem('sun').replace(/[\"]/gim, "");