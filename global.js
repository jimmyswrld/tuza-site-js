import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

//import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

//let split = new SplitType("h1", { types: "words, chars" });

let tl = gsap.timeline();

tl.to("h1", { autoAlpha: 1, duration: 0 });
tl.from("[hero-fade-up]", {
  y: 20,
  autoAlpha: 0,
  duration: 0.5,
  ease: "power3.easeOut",
}).from(
  "[hero-fade-in]",
  {
    autoAlpha: 0,
    duration: 2.5,
    ease: "power3.easeOut",
  },
  "<"
);

const fadeIn = document.querySelectorAll("[fade-in]");
const fadeUp = document.querySelectorAll("[fade-up]");

fadeIn.forEach((el) => {
  gsap.from(el, {
    autoAlpha: 0,
    duration: 1,
    ease: "power3.easeOut",
    scrollTrigger: { trigger: el, start: "top 80%" },
  });
});

fadeUp.forEach((el) => {
  const fadeTl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play resume resume reverse",
    },
  });
  fadeTl
    .from(el, {
      y: 20,
      duration: 0.3,
      ease: "power3.easeOut",
    })
    .from(el, { autoAlpha: 0, duration: 1.3, ease: "power3.easeOut" }, "<");
});

console.log("Global JS loaded");
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer_component",
    start: "top 50%",
    toggleActions: "play resume resume reverse",
  },
  defaults: { duration: 0.5, ease: "power3.easeOut" },
});
footerTl
  .from(".footer_component", {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  })
  .from(".footer_content-wrapper", { borderRadius: 0 }, "<");

gsap.to(".gradient-background_circle", {
  x: "random(-20, 20)%",
  y: "random(-20, 20)%",
  ease: "linear",
  duration: 4,
  repeat: -1,
  repeatRefresh: true,
});
