// скобочные группы
export default () => {
  console.log('Gogogo now!'.match(/(go)/i));
  console.log('Gogogo now!'.match(/(go)+/i));
  console.log('Gogogo now!'.match(/(go)+?/i));

  // string.match выдает скобочные группы только без флага g
  let str = '<h1>Привет, мир!</h1>';
  let reg = /<(.*?)>/;
  console.log(str.match(reg));

  reg = /<(.*?)>/g;
  let match;
  while (match = reg.exec(str)) {
    console.log(match);
  }

  str = '<span class="my">';
  reg = /<(([a-z]+)\s*([^>]*))>/;
  console.log(str.match(reg));

  match = 'ac'.match(/a(z)?(c)?/);
  console.log(match);

  str = 'Gogo John!';
  reg = /(?:go)+ (\w+)/i;

  console.log(str.match(reg));
  reg = /(go)+ (\w+)/i;

  console.log(str.match(reg));

  str = 'color: #3f3; background-color: #AA00ef; and: #abcd';
  reg = /#\w{3}(\w{3})?\b/g;
  console.log(str.match(reg));
  reg = /#[a-z0-9]{3}([a-z0-9]{3})?\b/ig;
  console.log(str.match(reg));
  reg = /#([a-z0-9]{3}){1,2}\b/ig;
  console.log(str.match(reg));

  const fn = (str) => {
    const reg = /(-?\d+\.?\d*) ([*\-+/]) (-?\d+\.?\d*)/;
    // const reg = /(-)?\d+\.?\d*?) ([+-*\/]) (-?\d+\.?\d*?)/;
    return str.match(reg).slice(1);
  }

  console.log(fn('1 + 2'));
  console.log(fn('1.2 * 3.4'));
  console.log(fn('-3 / -6'));
  console.log(fn('-2 - 2'));

};
