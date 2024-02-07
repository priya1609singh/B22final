function init(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh",() => locoScroll.update());
ScrollTrigger.refresh();
}
init()

var overlay = document.querySelector("#overlay")
var iscroll =document.querySelector("#scroll")
overlay.addEventListener("mouseenter" ,function(){
    iscroll.style.scale=1
})
overlay.addEventListener("mouseleave",function(){
    iscroll.style.scale=0
})
overlay.addEventListener("mousemove" ,function(dets){
    iscroll.style.left=`${dets.x-45}px`
    iscroll.style.top=`${dets.y-38}px`
})
document.querySelector("#page3").addEventListener("mousemove",function(dets){

    document.querySelector("#img-div").style.left=`${dets.x-120}px`
    document.querySelector("#img-div").style.top=`${dets.y-100}px`
})
gsap.from("#page2 h1",{
    duration:1,
    onStart: function(){
    $('#page2 h1').textillate({ in: { effect: 'fadeInUp',delayScale:1, } });
    },
    scrollTrigger: {
        scroller:"#main",
        trigger:"#page2 h1",
        start:"top 20%",
      }
})
gsap.to("#page2 img" ,{
  rotate: -5,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#page2 img",
    start:"top 80%",
   // markers:true,
    scrub:3
  }
})
gsap.to("#main",{
    backgroundColor:"#111",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2",
        start:"top -100%",
        end:"top -100%",
       // markers:true,
        scrub:3,
    }
})
var t1 =gsap.timeline({
    scrollTrigger:{
        trigger:"svg",
        scroller:"#main",
        start:"top 25%",
        end:"top -90%",
        scrub:true,
    }
})
t1.to("svg",{
    scale:1,
    top:"5%",
    duration:0.5,
    fill:"#111",
})
t1.to("#nav",{
    color: "#111",
    background:"linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
   
})
var t12 =gsap.timeline({
    scrollTrigger:{
        trigger:"svg",
        scroller:"#main",
        start:"top -700%",
        end:"top -800%",
        scrub:true,
    }
})
t12.to("svg",{
    scale:1,
    top:"5%",
    fill:"#fff",
})
t12.to("#nav",{
    color: "#fff",
    background:"linear-gradient(#000000d5,#00000089,#00000000)",
})
var t1=gsap.timeline({
    scrollTrigger:{
       trigger:"svg",
       scroller:"#main",
        start:"top 0%",
        end:"top -100%",
        scrub:true,
    }
})
t1.to("svg",{
    scale:1,
    top:"5%",
    fill:"#111",
})
t1.to("#nav",{
    color:"#111",
    background:"linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)"
})
var t12=gsap.timeline({
    scrollTrigger:{
        trigger:"svg",
        scroller:"#main",
         start:"top -240%",
         end:"top -250%",
         scrub:true,
     }
})
t12.to("svg",{
    scale:1,
    top:"5%",
    fill:"#fff",
})
t12.to("#nav",{
    color:"#fff",
    background:"linear-gradient(#000000d5,#00000089,#00000000)"
})
document.querySelector("#page4").addEventListener("mousemove",function(dets){
    document.querySelector("#page4>img").style.left=(dets.x )+"px"
    document.querySelector("#page4>img").style.top=(dets.y)+"px"
    document.querySelector("#page4>button").style.left=(dets.x+50)+"px"
    document.querySelector("#page4>button").style.top=(dets.y+200)+"px"
})
var elem=document.querySelectorAll(".elem")
elem.forEach(function(e){
    var a=e.getAttribute("data-img")
    e.addEventListener("mouseenter",function() {
       document.querySelector("#page4>img").setAttribute("src",a)
    })
})
gsap.to("#page5",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top 0",
        end:"top -100%",
        pin:true,
    }
})
gsap.from("#page5-div1",{
    rotate:-5,
    scrollTrigger:{
        trigger:"#page5-div1",
        scroller:"#main",
        start:"top 75%",
        end:"top 30%",
      scrub:true,
    }
})
gsap.from("#page5-div2",{
    y:400,
    rotate:-15,
    scrollTrigger:{
        trigger:"#page5-div2",
        scroller:"#main",
        start:"top 70%",
        end:"top 50%",
      scrub:2,
    }
})
