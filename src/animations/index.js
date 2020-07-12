import anime from "animejs/lib/anime.es.js"

function playAnimation() {
  anime({
    targets: `.Heading .Heading-letter`,
    translateY: [100, 0],
    opacity: [0, 1],
    easing: `easeInOutExpo`,
    duration: 1600,
    delay: (el, i) => 30 * i
  })
  
  anime({
    targets: `.ImageCard`,
    translateY: [200, 0],
    opacity: [0, 1],
    easing: `easeInOutExpo`,
    duration: 1800,
  })
  
  anime({
    targets: `.Navigation`,
    translateY: [200, 0],
    opacity: [0, 1],
    easing: `easeInOutExpo`,
    duration: 2200,
  })

  anime({
    targets: `.ThemeToggle`,
    opacity: [0, 1],
    easing: `easeInOutExpo`,
    duration: 2400,
  })
}

export default playAnimation