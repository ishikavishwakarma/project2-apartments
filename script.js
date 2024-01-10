function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
         getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init();
var page1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0%",
        end:"+=2000",
        scrub:true,
        // markers:true,
        pin:true
    }
})
page1.to("#page1 h2",{
   onStart: function(){
        $('#page1 h2').textillate({ 
            in: {
                 effect: 'flipInX',
                  delayScale:2,
                } });
    }
},"hi")
page1.to("#page1 p",{
    opacity:1,
   onStart: function(){
        $('#page1 p').textillate({ 
            in: {
                 effect: 'fadeInUp',
                 delayScale:.1,
                } });
    }
},"hi")
page1.to("#page1 button",{
    opacity:1,
},"hi")
page1.to("#part2 #pim1",{
    y:"-100%"
},"hello")
.fromTo("#pim1 img",{
    y:-750
},{
    y:0,
},"hello")
page1.to("#part2 #pim2",{
    y:"-100%"
},"hell")
.fromTo("#pim2 img",{
    y:-750
},{
    y:0,
},"hell")
var page2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"center center",
        end:"+=4000",
        scrub:true,
        // markers:true,
        pin:true
    }
})
page2.to("#extra1 #img1",{
    left:"25%",
    top:"35%",
}),
page2.to("#extra1 #img1",{
    top: "0%",
     left: "0%",
})
page2.to("#extra1 #img2",{
    left:"25%",
    top:"35%",
}),
page2.to("#extra1 #img2",{
    top: "50%",
     left: "0%",
})
page2.to("#extra1 #img3",{
    left:"25%",
    top:"35%",
}),
page2.to("#extra1 #img3",{
    top: "0%",
     left: "50%",
})
page2.to("#extra1 #img4",{
    left:"25%",
    top:"35%",
}),
page2.to("#extra1 #img4",{
    top: "50%",
     left: "50%",
})
page2.to("#page2 #extra2",{
    delay:1,
    top: "0%",
})
page2.to("#extra2 #pt1",{
    top: "0%",
    duration:1,
},"hel")
page2.to("#extra2 #pt2",{
    top: "0%",
    duration:1,
},"hel")
var pt1 = document.querySelector("#pt1");
var inner = document.querySelector("#inner");
var pt2 = document.querySelector("#pt2");
var inner2 = document.querySelector("#inner2");

pt1.addEventListener("mouseenter",function(){
    inner.style.clipPath= "ellipse(75% 75% at 50% 50%)";
})
pt1.addEventListener("mouseleave",function(){
    inner.style.clipPath= "ellipse(25% 40% at 50% 50%)";
})
// pt2.addEventListener("mouseenter",function(){
//     inner2.style.clipPath= "ellipse(75% 75% at 50% 50%)";
// })
// pt2.addEventListener("mouseleave",function(){
//     inner2.style.clipPath= "ellipse(25% 40% at 50% 50%)";
// })
page2.to("#page2 #extra3",{
    top: "0%",
    delay:1,
    ease:Power3.easeOut,
})
page2.to("#extra3 #img6",{
    y:"-100%"
},"ai")
.fromTo("#img6 img",{
    y:-750
},{
    y:0,
},"ai")
.fromTo("#img6>h1",{
    y:-750
},{
    y:0,
},"ai")
page2.to("#img7",{
    y:"-100%"
},"by")
.fromTo("#img7 img",{
    y:-750
},{
    y:0,
},"by")
.fromTo("#img7>h1",{
    y:-750
},{
    y:0,
},"by")

var page3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"center center",
        end:"+=2000",
        scrub:true,
        // markers:true,
        pin:true
    }
})
page3.to("#head h1",{
    left:"0%"
})
page3.to("#head #p31 ",{
    top: "-60vh",
    left: "-10%"
},"p3")
page3.to("#head #p32 ",{
    top: "60vh",
    left: "-4%"
},"p3")

page3.to("#head #p33 ",{
    top: "-60vh",
    left: "3%"
},"p3")
page3.to("#head #p34 ",{
    top: "60vh",
    left: "10%"
},"p3")
page3.to("#head #p35 ",{
    top: "-60vh",
    left: "17%"
},"p3")
page3.to("#head #p36 ",{
    top: "60vh",
    left: "24%"
},"p3")
page3.to("#head #p37 ",{
    top: "-60vh",
    left: "31%"
},"p3")
page3.to("#head #p38 ",{
    top: "60vh",
    left: "38%"
},"p3")
page3.to("#head #p39",{
    top: "-60vh",
    left: "45%"
},"p3")
page3.to("#head #p310",{
    top: "60vh",
    left: "52%"
},"p3")
page3.to("#head #p311",{
    top: "-60vh",
    left: "59%"
},"p3")
page3.to("#head #p312",{
    top: "60vh",
    left: "66%"
},"p3")
page3.to("#head #p313",{
    top: "-60vh",
    left: "73%"
},"p3")
page3.to("#head #p314",{
    top: "60vh",
    left: "80%"
},"p3")
page3.to("#head #p315",{
    top: "-60vh",
    left: "87%"
},"p3")
page3.to("#head #p316",{
    top: "60vh",
    left: "94%"
},"p3")
page3.to("#head #p317",{
    top: "-60vh",
    left: "100%"
},"p3")
page3.to("#head #p318",{
    top: "60vh",
    left: "107%"
},"p3")
page3.to("#head #p319",{
    top: "-60vh",
    left: "114%"
},"p3")
page3.to("#page3 #extra4 ",{
    delay:-.1,
    left: "0%"
})
page3.to("#extra4 #box1",{
    transform:"translate(-50vw,0)",
      delay:.5,
      duration:1
},"video")
page3.to("#box1 video",{
      transform:"translate(50vw,0)",
      delay:.5,
      duration:1
},"video")
page3.to("#extra4 #box2",{
    transform:"translate(50vw,0)",
      delay:.5,
      duration:1
},"video")
page3.to("#box2 video",{
      transform:"translate(-50vw,0)",
      delay:.5,
      duration:1
},"video")
page3.to("#extra4 #e4i",{
      delay:.5,
      duration:1,
    left:"50%"
},"video")
page3.to("#extra4 #e4h",{
      delay:.5,
      duration:1,
    left:"10%"
},"video")