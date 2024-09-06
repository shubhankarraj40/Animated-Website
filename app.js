var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
y:-40,
duration:0.5,
delay:0.6,
opacity:0,
stagger:0.15,
})
tl.from(".center1 h1,.center1 p,.center1 button",{
x:-300,
duration:0.4,
opacity:0,
})
tl.from(".center2 img",{
x:300,
opacity:0,
duration:0.5,
})//  },"-=1")--> 1secound pehle hin chal gya iske karan

tl.from(".section1bottom img",{
    opacity:0,
    duration:0.5,

},"-=1")

function marqueAnimation(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY > 0){
            gsap.to(".marque",{
                transform:"translate(-200%)",
                repeat:-1,
                duration:4,
                ease:"none"
            })
        gsap.to(".marque img",{
            rotate:180
        })
        } else{
            gsap.to(".marque",{
                transform:"translate(-0%)",
                repeat:-1,
                duration:4,
                ease:"none"
        })
        gsap.to(".marque img",{
            rotate:0
        })
      }
    })
} 
marqueAnimation()

