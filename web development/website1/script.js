gsap.to("#nav",{
    // backgroundColor:"#000",
    duration: 0.7,
    height:"110px",
    scroolTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})