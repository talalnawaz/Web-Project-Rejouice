//Function for locoMotive scrolltriger code pen 
function locoScroll(){

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locoScroll();


// function for cursor effect
function cursorEffect(){
    let page1Content=document.querySelector("#page1-content");
    let cursor=document.querySelector("#cursor");

    page1Content.addEventListener("mousemove",(dets)=>{   //dets events pr depend krta ha jasy mousemove pr
        // cursor.style.left=dets.x+"px";
        // cursor.style.top=dets.y+"px";


        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })

    page1Content.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            // scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            // scale:0,
            opacity:0
        })
    })

}

cursorEffect();


// function for page 2 animation
function page2Animation(){
  gsap.from(".text", {
  y: 120,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",   
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
    // markers: true       
  }
});
}

page2Animation();

// function for page 4 Animation
function page4Animation(){
    gsap.from(".para", {
  y: 120,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",   
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
    // markers: true       
  }
});

}

page4Animation();





// function for page 6 
function sliderAnimation(){
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    
    });

}


sliderAnimation();



let tl=gsap.timeline() 
tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})


tl.to("#loader h3",{
  opacity:0,
  x:-10,
  duration:1,
  stagger:0.1
})





tl.to("#loader",{
  opacity:0,
})

tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5

})

tl.to("#loader",{
  display:"none"
})


