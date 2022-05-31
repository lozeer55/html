setTimeout(function () {
    $('.loader_bg').fadeToggle();
}, 1500);


const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')



menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})