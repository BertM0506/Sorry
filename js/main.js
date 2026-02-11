
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Hai Nica, maaf ya kalau caraku bercanda melewati batas. niatku hanya ingin melihatmu tersenyum.🙇😇 ').split('');
const titleElement = document.getElementById('title');
titleElement.style.fontSize = '22px'; 
titleElement.style.letterSpacing = '2px'; 
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
