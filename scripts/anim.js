const fadeInOutObserver = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is intersecting:', entry.target);
      entry.target.classList.add('fade-in-out-anim'); 
    } else {
      console.log('Element is not intersecting:', entry.target);
      entry.target.classList.remove('fade-in-out-anim'); 
    }
  });
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, 
};

const observer = new IntersectionObserver(fadeInOutObserver, observerOptions);
const sections = document.querySelectorAll('.section');

function updateThreshold() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600 && observerOptions.threshold != 0.1) {
    console.log('Changed treshold to 0.1');
    observerOptions.threshold = 0.1;
  } else if (screenWidth >= 600 && observerOptions.threshold != 0.5) {
    console.log('Changed treshold to 0.5');
    observerOptions.threshold = 0.5;
  }
  
  sections.forEach(target => observer.observe(target));
}

updateThreshold();

window.addEventListener('resize', updateThreshold);

sections.forEach(section => {
  observer.observe(section);
});
