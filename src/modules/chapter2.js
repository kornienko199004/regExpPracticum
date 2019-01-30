// Регулярные выражения и классы

export default () => {
  let str = '+7(903)-123-45-67';
  let reg = /\w/g;
  console.log(str.match(reg));

  /*
    \w - word (буква латинского алфавита, цифра, _)
    \d - цифра - 0-9
    \s - space
    \b - граница слова
  */
  console.log('Hello, Java!'.match(/\bJava\b/));
  console.log('Hello, Javascript!'.match(/\bJava\b/));

  /*
    обратные классы
    \D - не цифра
    \S - не пробел
    \W - любой символ, кроме \w
    \B - проверка, обратная \b
  */
  console.log(str.replace(/\D/g, ''));

  // . - любой символ, кроме перевода строки
};
