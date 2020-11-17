// Menu links
const menu = document.getElementById('menu');
const closeIcon = document.getElementById("nav__toggle");

menu.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
};

// GSAP word animation
const words = ['Jovica Bumbulovic','A web developer', 'A gym enthusiast', 'Your next coworker'];
let cursor = gsap.to('.hero__cursor', {opacity: 0,duration: 1, ease: 'power2.inOut', repeat: -1});

let masterTL = gsap.timeline({repeat: -1, delay: .5});

words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
  tl.to('.hero__h-anim', {duration: 1.1, text: word})
  masterTL.add(tl)
})

// GSAP scroll trigger
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.start'
  }
});

tl.from('.box', {
  x: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.4
});