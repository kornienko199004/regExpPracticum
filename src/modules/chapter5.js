// жадные и ленивые квантификаторы

export default () => {
  // найти все слова в кавычках
  let reg = /".+"/g;
  let str = 'a "witch" and her "broom" is one';
  console.log(str.match(reg));

  // ленивый режим +? *? ??

  reg = /".+?"/g;
  console.log(str.match(reg));

  reg = /"[^"]+"/g;
  console.log(str.match(reg));

  str = '...<a href="link" class="doc">...';
  reg = /<a href=".*" class="doc">/g;
  console.log(str.match(reg));

  str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
  console.log(str.match(reg));

  reg = /<a href=".*?" class="doc">/g;
  str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
  console.log(str.match(reg));

  str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
  console.log(str.match(reg));

  reg = /<a href="[^"]*" class="doc">/g;
  console.log(str.match(reg));

  const str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
  console.log(str2.match(reg));
};
