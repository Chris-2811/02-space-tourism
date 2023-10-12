const numberList = document.querySelector('.number-indicators');
const numbers = numberList.querySelectorAll('div');
const main = document.getElementById('main');
const image = document.querySelector('.image');
console.log(image);

function changeNumber(e) {
  numbers.forEach((number) => {
    number.classList.remove('active');
    e.target.classList.add('active');
  });

  const targetNumber = e.target.getAttribute('data-infoTech');

  const infoElements = document.querySelectorAll('.info');
  infoElements.forEach((element) => {
    element.setAttribute('hidden', true);
  });

  console.log(targetNumber);
  main.querySelector(`#${targetNumber}`).removeAttribute('hidden');
}

// Add Eventlisteners
numbers.forEach((number) => {
  number.addEventListener('click', changeNumber);
});
