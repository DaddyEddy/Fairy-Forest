window.addEventListener('scroll',e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

// Soft scrolling

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


