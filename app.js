gsap.to('.b2 h2', {
    duration: 1,
    y: 0,
    scale: 2,
    autoAlpha: 1,
    scrollTrigger: {
        trigger: '.b2 h2',
        markers: true,
        // Trigger Scroller
        start: "top 60%",
        end: "bottom 40%",
        // onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "play pause reverse reset",
        // play pause resume reset restart complete reverse none
        onEnter: () => console.log("ENTER"),
        onLeave: () => console.log("LEAVE"),
        onEnterBack: () => console.log("ENTERBACK"),
        onLeaveBack: () => console.log("LEAVEBACK"),
        scrub: 1 // or true
    }
})

ScrollTrigger.create({
    trigger: '.b2',
    pin: true,
    // markers: true,
    end: "bottom 50%"
})