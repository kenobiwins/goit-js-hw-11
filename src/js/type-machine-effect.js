const title = document.querySelector('.title-gallery');

window.addEventListener('DOMContentLoaded', typeLine);

const text = [
  'looking for images?... ',
  'Cats?... ',
  'Dogs?... ',
  'Volkswagen Golf?... ',
  'Beef?... ',
  'No? ',
  'Why? Are you vegetarian ?',
];

let line = 0;
let count = 0;
let result = '';

function typeLine() {
  let interval = setTimeout(() => {
    result += text[line][count];
    title.textContent = result + '|';

    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
        title.textContent = result;
        return true;
      }
    }
    typeLine();
  }, getRandom(getRandom(350)));
}

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
