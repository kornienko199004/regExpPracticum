// Альтернация (или) |
export default () => {
  let reg = /html|php|css|java(script)?/gi;
  let str = 'Сначала появился HTML, затем CSS, потом JavaScript';
  console.log(str.match(reg));

  str = 'Java JavaScript PHP C++ C';
  reg = /java(script)?|php|c\+\+|c/gi;
  console.log(str.match(reg));

  str = 'she said "hello"';
  console.log(str.match(/"[^"]*"/g));

  str = 'she said "hello", "goodbye"';
  console.log(str.match(/"[^"]*"/g));
  reg = /"([^"]*)"/g;
  console.log(reg.exec(str));
  console.log(reg.exec(str));

  str = '<style> <styler> <style test>';
  reg = /<style(\s(.*)+)?>/g;
  reg = /<style(>|\s.*?>)/g;
  console.log(str.match(reg));
};
