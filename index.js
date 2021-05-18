const hamburger = document.querySelector('.hamburger')
const cross = document.querySelector('.cross')
hamburger.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav')
})
cross.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav')
})