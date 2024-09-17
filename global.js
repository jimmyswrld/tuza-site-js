import { gsap } from "gsap";
import SplitType from "split-type";

let split = new SplitType("h1", { types: "chars" });

let tl = gsap.timeline();

tl.to("h1", { autoAlpha: 1, duration: 0 });
tl.from(split.chars, {
  duration: (index, target, targets) => 0.5 + (index / targets.length) * 1, // Increase duration for elements at the end
  y: 20,
  ease: "elastic.out(1.2,0.75)",
  stagger: 0.03,
}).from(split.chars, { opacity: 0, stagger: 0.03, duration: 0.3 }, "<");

gsap.from("[fade-up]", {
  y: 20,
  autoAlpha: 0,
  duration: 0.5,
  ease: "power3.easeOut",
});

gsap.from("[fade-in]", {
  autoAlpha: 0,
  duration: 2.5,
  ease: "power3.easeOut",
});
