AOS.init({
  // Global settings:
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 

  // Settings that can 
  offset: 120,
  delay: 0,
  duration: 400, 
  easing: 'ease',
  once: false,
  mirror: false, 
  anchorPlacement: 'top-bottom',
});



// Preloader
var loader = document.getElementById('loader')
window.addEventListener("load", function(){
  loader.style.display = "none";
})

