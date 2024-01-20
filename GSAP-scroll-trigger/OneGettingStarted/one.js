gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: -1500,
  duration: 3,
  scrollTrigger: ".square2",
});
gsap.to(".square2", {
  x: 1400,

  duration: 4,
  scrollTrigger: ".square3",
});
gsap.to(".square3", {
  x: -1100,
  duration: 4,
  scrollTrigger: ".square4",
});
gsap.to(".square4", {
  x: 400,
  duration: 5,
  scrollTrigger: ".square5",
});
gsap.to(".square5", {
  x: -2000,
  duration: 6,
  scrollTrigger: ".square6",
});
gsap.to(".square6", {
  x: 1600,
  duration: 6,
  scrollTrigger: ".square7",
});
gsap.to(".square7", {
  x: -900,
  duration: 4,
  scrollTrigger: ".square7",
});
