// обратные ссылки \n $n
export default () => {
  let str = 'Александр Пушкин';
  let reg = /([а-яё]+) ([а-яё]+)/i;
  console.log(str.match(reg));

  str = str.replace(reg, '$2, $1');
  console.log(str);

  str = 'He said: "She\'s the one!".';
  reg = /["'](.*?)['"]/g;
  console.log(str.match(reg));

  reg = /(['"])(.*?)\1/g;
  console.log(str.match(reg));

  str = '..[url]http://ya.ru[/url]..';
  reg = /\[(\w+)\](.*?)\[(?:\/)\1\]/g;
  console.log(str.match(reg));

  str = '..[url][b]http://ya.ru[/b][/url]..';
  console.log(str.match(reg));

  str = 'AAAbbCCDDsss';
  let resultStr = '';
  const match = str.match(/([a-z])(\1)*/gi);
  match.forEach((item) => {
    resultStr = `${resultStr}${item.length}${item.substring(0, 1)}`;
  });
  console.log(str);
  console.log(match);
  console.log(resultStr);
};
