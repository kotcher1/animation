const question = document.getElementById('question');

const name = document.getElementById('name');

const letters = document.querySelectorAll('.cloud-text span');
const letters2 = document.querySelectorAll('.cloud-text2 span');

const spanNumbers = document.querySelectorAll('.round span')

let delay = 2.7;
let delay2 = 3.7;

letters.forEach(element => {
  element.style.animationDelay = `${delay}s`;
  delay += 0.04;
});

letters2.forEach(element => {
  element.style.animationDelay = `${delay2}s`;
  delay2 += 0.04;
});

question.addEventListener('animationend', () => {
  document.querySelector('.block.b2').setAttribute('class', 'block b2 anima');
})


name.addEventListener('animationend', () => {
  document.querySelector('.block.b3').setAttribute('class', 'block b3 anima');
  let i = 1;
  spanNumbers.forEach (element => {
    element.setAttribute('class', ` number-animation`);
    element.style.animationDelay = `${i}s`
    i += 1;
  })
})