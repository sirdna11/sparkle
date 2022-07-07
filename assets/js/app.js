const hamburger = document.querySelector('.hamburger')
const ha = document.querySelector('.iner-navigation')
const nav = document.querySelector('.navigation')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    ha.classList.toggle('active')
    nav.classList.toggle('active')
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });