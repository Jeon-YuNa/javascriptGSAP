const tl = gsap.timeline();
tl.fromTo(
  "h4",
  { opacity: 0, y: 10 },
  { y: 0, opacity: 1, duration: 0.6, ease: "ease-in-out" }
);
tl.fromTo(
  "p",
  { opacity: 0, y: 20 },
  { y: 0, opacity: 1, duration: 0.6, ease: "ease-in-out" }
);
const tl2 = gsap.timeline();
tl2.fromTo(
  ".h2-1",
  { opacity: 0, y: 10 },
  { y: 0, opacity: 1, duration: 0.6, ease: "ease-in-out" }
);
tl2.fromTo(
  ".h2-2",
  { opacity: 0, y: 30 },
  { y: 0, opacity: 1, duration: 0.6, ease: "ease-in-out" }
);
tl2.fromTo(
  ".h2-3",
  { opacity: 0, y: 30 },
  { y: 0, opacity: 1, duration: 0.6, ease: "ease-in-out" }
);
tl2.fromTo(
  ".h2-4",
  { opacity: 0, y: 30 },
  { y: 0, opacity: 1, duration: 0.6, ease: "ease-in-out" }
);
