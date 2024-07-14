const tl= gsap.timeline();

tl.from("nav h3",{
    y: -50,
    // opacity: 0,
    duration: 0.4,
    delay: 0.2,
    stagger: 0.2
})

tl.from("img",{
    opacity:0,
    duration: 0.4,
    stagger:0.3,
    x:100,
    rotate:50,
})

tl.from("#frontText h1",{
    opacity: 0,
    x: -500,
    duration: 0.4,
    stagger:0.3,
})

tl.from("footer",{
    opacity:0,
    y:50
})