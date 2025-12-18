(function() {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      header.classList.add('header--faded');
    } else if (lastScrollY - currentScrollY >= 10) {
      // Scrolling up by at least 10px
      header.classList.remove('header--faded');
    }

    lastScrollY = currentScrollY;
  });
})();
