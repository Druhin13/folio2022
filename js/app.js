gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
 // normalizeScroll: true,
  smoothTouch: 0.1,
});