// начало строки и конец строки
export default () => {
  let str = '100500 попугаев съели 500100 бананов!';
  console.log(str.match(/\d+/ig));
  console.log(str.match(/^\d+/ig));
  str = '100500 попугаев съели 500100';
  console.log(str.match(/\d+$/ig));

  str = 'ля-ля 12.34';
  console.log(str.match(/\d+\.\d+/ig));
  console.log(str.match(/^\d+\.\d+$/ig));
  str = '12.34';
  console.log(str.match(/^\d+\.\d+$/ig));

  const reg = /^([0-9a-f]{2}:){5}[0-9a-f]{2}$/ig;
  console.log(reg.test('01:32:54:67:89:ABfgdfgdg'));
  console.log(reg.test('0132546789AB'));
  console.log(reg.test('01:32:54:67:89'));
  console.log(reg.test('01:32:54:67:89:22'));
};
