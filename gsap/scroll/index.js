gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "section:nth-child(2)",
    markers: true,
    start: "top center",
    end: "bottom bottom",
    scrub: true,
  },
});
tl.fromTo(".box", { x: 0 }, { x: 500, duration: 3 });
tl.fromTo("h2", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 3 });
