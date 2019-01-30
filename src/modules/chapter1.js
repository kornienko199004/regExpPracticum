/*
  Методы RegExp и String
*/

export default () => {
  let str = 'Люблю рукэкспы я, но странной любовью';
  console.log(str.search(/лю/i));

  // str.match(reg) без флага g
  str = 'Ой-ой-ой';
  let result = str.match(/ой/i);
  console.log(result[0]);
  console.log(result.index);
  console.log(result.input);

  /*
    Если часть шаблона обозначена скобками
    она станет отдельным элементом массива
  */
  str = 'javascript - это такой язык';
  result = str.match(/JAVA(SCRIPT)/i);
  console.log(result[0]); // все совпадение полностью
  console.log(result[1]); // часть совпадения, соответствующая скобкам
  console.log(result.index);
  console.log(result.input);

  // str.match(reg) с флагом g
  str = 'Ой-ой-ой';
  result = str.match(/ой/ig);
  console.log(result[0]);
  console.log(result);
  console.log(result.index);
  console.log(result.input);

  /*
    Если часть шаблона обозначена скобками
    она станет отдельным элементом массива
  */
  str = 'javascript - это такой язык';
  result = str.match(/JAVA(SCRIPT)/gi);
  console.log(result[0]); // все совпадение полностью
  console.log(result); // часть совпадения, соответствующая скобкам
  console.log(result.index);
  console.log(result.input);

  // str.replace
  console.log('12-34-56'.replace('-', ':'));
  console.log('12-34-56'.replace(/-/g, ':'));
  console.log('Василий Пупкин'.replace(/(Василий) (Пупкин)/, '$2, $1'));

  // функция для замены
  let i = 0;
  console.log('Ой-ой-ой'.replace(/ой/gi, () => {
    i += 1;
    return i;
  }));

  /*
    аргументы функции replacer (str, (p1, p2, ..., pn), offset, s);
    str - найденное совпадение
    p1, p2, ..., pn - содержимое скобок(если есть)
    offset - позиция, на которой найдено совпадение
    s - исходная строка
  */

  const replacer = (someStr, offset, s) => {
    console.log(`Найдено: ${someStr} на позиции: ${offset} в строке: ${s}`);
    return someStr.toLowerCase();
  };
  result = 'Ой-ой-Ой'.replace(/ой/gi, replacer);
  console.log(`Результат ${result}`);

  // regexp.test(str);

  str = 'Люблю регэкспы я, но странною любовью';
  console.log(/лю/i.test(str));

  // regexp.exec(str)

  str = 'Многое по JavaScript можно найти на сайте http://javascript.ru';
  const regexp = /javascript/ig;
  console.log(`Начальное значение lastIndex: ${regexp.lastIndex}`);

  while (result = regexp.exec(str)) {
    console.log(`Найдено: ${result[0]} на позиции ${result.index}`);
    console.log(`Свойство lastIndex: ${regexp.lastIndex}`);
  }
};
