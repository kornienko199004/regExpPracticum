// Многострочный режим, флаг 'm'
export default () => {
  let str = '1е место: Винни\n'
  + '2е место: Пятачок\n'
  + '33е место: Слонопотам';

  console.log(str.match(/^\d+/gm));
  console.log(str.match(/[а-я]+$/igm));
  str = '<a test="<>" href="#">';
  console.log(str.match(/<[^>]*>/));
};
