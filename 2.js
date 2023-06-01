function greeting() {
  let name = prompt("Как к Вам можно обратиться? ");
  good_words = `Добрый день, ${name}!`;
  //   alert(good_words); // это позволит одновременно видеть приветствие на экране браузера
}

greeting();
console.log(good_words);
