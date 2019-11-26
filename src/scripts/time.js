const date = new Date();
const oneDay = 24 * 60 * 60 * 1000;
const weekAgoTimestamp = 6 * 24 * 60 * 60 * 1000;
const ago = new Date(date.getTime() - weekAgoTimestamp);
const now = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
const sevenDaysAgo = `${ago.getFullYear()}-${ago.getMonth() + 1}-${ago.getDate()}`;

const month = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
const day = [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

export {now, sevenDaysAgo, month, day, date, ago, oneDay}