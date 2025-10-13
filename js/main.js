
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('SELAMAT MALAM REGIA CANTIKK, SEMANGAT UTSNYAAAA YAA 💖').split('');
const titleElement = document.getElementById('title');
titleElement.style.fontSize = '22px'; // lebih kecil, lebih elegan
titleElement.style.letterSpacing = '2px'; // jarak antar huruf

let index = 0;
function type() {
  if (index < titles.length) {
    titleElement.innerHTML += titles[index];
    index++;
    setTimeout(type, 70); // kecepatan ketikan
  }
}
type();


    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
