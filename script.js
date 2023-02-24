const select = (target) => document.querySelector(target) 


const carouselRotate = (direction) => {
    const buttonLeft = select('.carousel-button__left')
    const buttonRight = select('.carousel-button__right')
    const carouselView = select('.carousel-wrapper')
    const itemWidth = select('.carousel-item > img').offsetWidth
    console.log(itemWidth)

    buttonLeft.addEventListener('click', () => {
        // console.log("left")
        carouselView.style.transform += `translateX(${itemWidth}px)`
    })

    buttonRight.addEventListener('click', () => {
        // console.log("rigth")
        carouselView.style.transform += `translateX(-${itemWidth}px)`
    })

    // carouselView.style.transform = `translateX(-${itemWidth}px)`

}

carouselRotate()

const hoverItemDescription = () => {
    const 
}