const tl= gsap.timeline();

tl.from("nav h3",{
    y: -50,
    // opacity: 0,
    duration: 0.4,
    delay: 0.2,
    stagger: 0.2
})

tl.from("#frontText h1",{
    opacity: 0,
    duration: 2,
    stagger:0.4,
})