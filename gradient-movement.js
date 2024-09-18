import { gsap } from "gsap";

gsap.to(".gradient-background_circle", {
  x: "random(-20, 20)%",
  y: "random(-20, 20)%",
  ease: "linear",
  duration: 3,
  repeat: -1,
  repeatRefresh: true,
});
