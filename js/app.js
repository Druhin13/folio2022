/* https://github.com/grcmichael/gscroll */
/* GSAP + ScrollTrigger + GScroll */

import gsap from "https://cdn.skypack.dev/gsap"
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger"
import GScroll from "https://cdn.skypack.dev/@grcmichael/gscroll"

gsap.registerPlugin(ScrollTrigger)

const scroll = new GScroll(
  '#GScroll',
  0.8,
  () => {ScrollTrigger.update()}
);

scroll.init();
scroll.wheel();

const scroller = document.getElementById('GScroll')
ScrollTrigger.defaults({
  scroller: scroller
})

ScrollTrigger.scrollerProxy(scroller, {
  scrollTop(value) {
    if (arguments.length) {
      scroll.current = -value // setter
    }
    return -scroll.current // getter
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
  }
});


window.addEventListener('resize', () => {
  scroll.resize()
})


/* Scroll Trigger animations */

gsap.utils.toArray(".case-study-link").forEach((panel, i) =>{
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});

/*gsap.to(".case-study-link", {
  trigger: ".case-study-link",
  scrollTrigger: {
    trigger: ".case-study-link",
    pin: true,
    markers: {
      fontSize: "2rem",
    },
  }  
})*/