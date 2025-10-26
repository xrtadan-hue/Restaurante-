document.addEventListener('DOMContentLoaded', function() {
  const menuSection = document.getElementById('menu');
  
  function checkSlide() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const sectionTop = menuSection.getBoundingClientRect().top;
    
    if (sectionTop < triggerBottom) {
      menuSection.classList.add('show');
    } else {
      menuSection.classList.remove('show');
    }
  }
  
  window.addEventListener('scroll', checkSlide);
});