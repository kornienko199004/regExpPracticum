// Наборы и диапазоны [...]

export default () => {
  // [eao] означает любой символ из трех (но не все)
  console.log('Гоп-стоп'.match(/[гт]оп/gi));

  console.log('Вуаля'.match(/В[уа]ля/));

  // диапазоны
  console.log('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/gi));

  let str = 'The sun is rising!';
  console.log(str.match(/\w+/g));

  str = 'Солнце встаёт';
  console.log(str.match(/\w+/g));
  console.log(str.match(/[\wа-яё]+/gi));

  // Диапазоны кроме [^...]
  console.log('alice@gmail.com'.match(/[^\d\sA-Z]/gi));
};
