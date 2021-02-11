let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-img",
        start: "top center"
    }
});
let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-text",
        start: "top center"
    }
});
let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-text",
        start: "bottom bottom"
    }
});
let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "top center"
    }
});
let t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "bottom bottom"
    }
});
let t7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".project",
        start: "top"
    }
});
let t6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".project-grid",
        start: "bottom bottom"
    }
});
let t8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".testim",
        start: "bottom bottom"
    }
});





t1.from(".about-img img",{y:200, opacity: 0, duration: 1})
t2.from(".about-text h3",{y:300, opacity: 0, duration: 1}, "-=1")
t2.from(".about-text p",{y:300, opacity: 0, duration: 1}, "-=1")
t4.from(".services h3", {y:300, opacity: 0, duration: 1.2}, "-=1")
t3.from(".services .card1", {y:300, opacity: 0, duration: 1}, "-=1")
t3.from(".services .card2", {y:300, opacity: 0, duration: 1.2}, "-=1")
t3.from(".services .card3", {y:350, opacity: 0, duration: 1.4}, "-=1")
t5.from(".project h3", {y:300, opacity: 0, duration: 1}, "-=1")
t6.from(".testim h3", {y:200, opacity: 0, duration: 1.2}, "-=1")
t7.from(".project-grid", {y:200, opacity: 0, duration: 1}, "-=1")
t8.from(".cont-wrapper", {y:400, opacity: 0, duration: 2}, "-=1")
