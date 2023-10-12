const tabsList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

function changeTabPanel(e) {
  const id = e.target.getAttribute('aria-controls');
  const tabContainer = e.target.parentElement;
  const mainContainer = tabContainer.parentElement.parentElement;
  const targetImage = e.target.getAttribute('data-img');

  console.log(targetImage);

  mainContainer
    .querySelectorAll('[role="tabpanel"]')
    .forEach((panel) => panel.setAttribute('hidden', true));

  mainContainer.querySelector([`#${id}`]).removeAttribute('hidden');

  mainContainer
    .querySelectorAll('img')
    .forEach((img) => img.setAttribute('hidden', true));

  mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

  // Underlines

  tabs.forEach((tab) => {
    tab.classList.remove('active');
    e.target.classList.add('active');
  });
}

// Add Eventlisteners

tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);
});
