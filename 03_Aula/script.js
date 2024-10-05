const carrosselImages = document.querySelector('.carrossel-images')
const images = carrosselImages.querySelectorAll('img')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
let currentIndex = 0

function ShowImage(index)
{
    const offset = -index*100
    carrosselImages.style.transform = `translateX(${offset}%)`
}

prevButton.addEventListener('click', ()=>{
    currentIndex = (currentIndex === 0) ? images.lenght -1: currentIndex -1
    ShowImage(currentIndex)
})
nextButton.addEventListener('click', ()=>{
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex +1
    ShowImage(currentIndex)
})
