// gsap.to(".box", {
//   x: 100,
//   stagger: 0.5,
//   duration: 1,
// });

//gsap.to("타겟",{"어떻게"});

//to {}로 가겠다
// gsap.to(".box", { backgroundColor: "pink", duration: 1 });

//from {}로 시작해서 원래 css로
// gsap.from(".box", { backgroundColor: "pink", duration: 1 });

//fromTo {} -> {}
// gsap.fromTo(".box", { x: 0 }, { x: 100, duration: 2 });

const tl = gsap.timeline();
tl.to(".box", { x: 100, duration: 1 });
tl.to(".box", { y: 100, duration: 1 });
tl.to(".circle", { x: 100, duration: 2 });
const tl1 = gsap.timeline();
tl1.to(".bigBox", { x: 100, duration: 2 });
