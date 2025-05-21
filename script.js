var cursor = document.querySelector(".cursor")
var main = document.querySelector("main")

main.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.x,
        opacity:1,
    });
});

document.querySelectorAll(".heading-text").forEach((headingText, index)=>{
    headingText.addEventListener("mousemove",(e)=>{
        var offsetX = headingText.offsetLeft + 300;
        var offsetY = headingText.offsetTop + 300;
        gsap.to(headingText.querySelector("img"),{
            scale:1.2,
            x:(e.x - offsetX),
            y:(e.y - offsetY),
            opacity:1
        });
        gsap.to(cursor,{
            scale:0
        })
    });

    headingText.addEventListener("mouseleave",(e)=>{
        gsap.to(cursor,{
            scale:1
        })
        gsap.to(headingText.querySelector("img"),{
            scale:0,
            opacity:0.
        });
    });
});

gsap.from(".heading-text",{
    y:200,
    opacity:0,
    stagger:0.2,
    duration:0.5
})

gsap.from("p",{
    y:200,
    opacity:0,
    duration:0.9,
    delay:0.5
})

const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
