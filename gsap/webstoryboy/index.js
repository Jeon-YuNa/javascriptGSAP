gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section1",
    markers: true,
    start: "top top",
    end: "+=2000px",
    pin: true,
    scrub: true,
  },
});
t1.to(".box", {
  scale: 0,
  rotate: "360deg",
  borderRadius: "50%",
  repeat: 1,
  yoyo: true,
});
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    markers: true,
    start: "top top",
    end: "+=2000px",
    pin: true,
    scrub: true,
  },
});
t2.fromTo(
  ".circle1",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, borderRadius: 0 }
);
t2.fromTo(
  ".circle2",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, borderRadius: 0 }
);
t2.fromTo(
  ".circle3",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, borderRadius: 0 }
);
