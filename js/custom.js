const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
    loop: true,
    parallax: true,
    speed: 1000,

    slideActiveClass: 'on',
});

const MAIN_VS_LEFT_BUTTON = document.querySelector('.MainVisual .main_slide_arrows .left')
MAIN_VS_LEFT_BUTTON.addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
});
const MAIN_VS_RIGHT_BUTTON = document.querySelector('.MainVisual .main_slide_arrows .right')
MAIN_VS_RIGHT_BUTTON.addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext(); 
});     

const MAIN_NOTICE_SLIDE = new Swiper ('.main_notice_slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
});

const MAIN_MS_LEFT_BUTTON = document.querySelector('.MainCustomer .main_Custom_arrows .left')
MAIN_MS_LEFT_BUTTON.addEventListener('click', () => {
    MAIN_NOTICE_SLIDE.slidePrev();
});
const MAIN_MS_RIGHT_BUTTON = document.querySelector('.MainCustomer .main_Custom_arrows .right')
MAIN_MS_RIGHT_BUTTON.addEventListener('click', () => {
    MAIN_NOTICE_SLIDE.slideNext(); 
});    

window.addEventListener('scroll',() => {
    let SCT = window.scrollY;
    SCT > 0
? document.querySelector('#Header').classList.add('on')
: document.querySelector('#Header').classList.remove('on');  
});

AOS.init();
