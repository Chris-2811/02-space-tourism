const dotList = document.querySelector('.dot-indicators');
const dots = dotList.querySelectorAll('div');
const main = document.querySelector('.grid-container--crew');

console.log(dotList);
console.log(dots);

// Fix position of commander img

document.getElementById('commander').style.marginLeft = '12vw';

function changeContent(e) {
  const targetImage = e.target.getAttribute('data-image');
  const images = main.querySelectorAll('img');

  targetInfo = e.target.getAttribute('data-info');

  // Change Info

  document
    .querySelectorAll('.info')
    .forEach((info) => info.setAttribute('hidden', true));

  main.querySelector([`#${targetInfo}`]).removeAttribute('hidden');

  //  Change Image
  images.forEach((image) => {
    image.setAttribute('hidden', true);
    if (image.getAttribute('id') === targetImage) {
      image.hidden = false;
    }
  });

  // Change focus
  dots.forEach((dot) => {
    dot.classList.remove('active');
    e.target.classList.add('active');
  });
}

// Add eventlisteners
dots.forEach((dot) => {
  dot.addEventListener('click', changeContent);
});
