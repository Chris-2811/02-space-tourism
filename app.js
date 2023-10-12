const open = document.getElementById('open');
const close = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');

// Add eventlisteners
open.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

close.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = 'visible';
});
