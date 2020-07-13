const wrapper = document.querySelector(".hero")
const h1 = wrapper.querySelector("h1")

const walk = 250;

function handleMouseMove(e){
    let {offsetX : x, offsetY : y} = e;
    if (e.target !== this){
        x += e.target.offsetLeft
        y += e.target.offsetTop
    }
    const {offsetWidth : width, offsetHeight : height } = this;
    
    let leftPx = Math.round((walk / (width / 2)) * (x - width / 2))
    let topPx = Math.round((walk / (height / 2)) * (y - height / 2))
    
    h1.style.textShadow = `
        ${leftPx}px ${topPx}px 0 rgba(13, 100, 60, 1),
        ${-1 * leftPx}px ${-1 * topPx}px 0 rgba(16, 37, 216, 1),
        ${-1 * leftPx}px ${topPx}px 0 rgba(13, 190, 177, 1),
        ${leftPx}px ${-1 * topPx}px 0 rgba(211, 19, 11, 1)
    `;
}

wrapper.addEventListener("mousemove", handleMouseMove)