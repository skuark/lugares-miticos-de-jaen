(function () {
  // Header visibility - hide when not on first slide
  const header = document.getElementById('header');
  const slidesContainer = document.querySelector('.slides--container');

  if (slidesContainer && window.innerWidth >= 1280) {
    // Article pages with slides: hide header if not on first slide OR intro is hidden
    const intro = document.querySelector('.article-gallery--intro');

    const updateHeaderVisibility = () => {
      const currentSlide = Math.round(slidesContainer.scrollTop / window.innerHeight);
      const introVisible = intro && intro.style.opacity !== '0';

      if (currentSlide === 0 && introVisible) {
        header.classList.remove('header--faded');
      } else {
        header.classList.add('header--faded');
      }
    };

    slidesContainer.addEventListener('scroll', updateHeaderVisibility);

    // Also watch for intro opacity changes
    if (intro) {
      new MutationObserver(updateHeaderVisibility).observe(intro, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    updateHeaderVisibility(); // Initialize
  }
  // Regular pages: header always visible (no listener needed)
})();
