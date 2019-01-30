// Квантификаторы +, *, ? и {n}

export default () => {
  let str = '+7(903)-123-45-67';

  // количество {n} - точное, {n, m} - диапазон, {n,} - от n и больше
  console.log('Мне не 12, а 1234 года'.match(/\d{3,5}/));
  console.log(str.match(/\d{1,}/g));

  /*
    короткие обозначения {1,} = +
  */
  console.log(str.match(/\d+/g));

  // ? = {0, 1} - символ необязателен
  str = 'Можно писать color или colour (британский вариант)';
  console.log(str.match(/colou?r/g));

  // * = {0,} - 0 или более
  console.log('100 10 1'.match(/\d0*/g));
  console.log('100 10 1'.match(/\d0+/g));
  console.log('100 10 1'.match(/\d+/g));

  console.log('0 1 12.345 7890'.match(/\d+\.\d+/g));
};
