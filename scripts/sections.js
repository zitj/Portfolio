const nav = document.querySelector('nav');
const contact = document.querySelector('.contact');
const ovako = document.getElementById('ovako');
const swiperContainer = document.getElementsByClassName('swiper-container');
const swiperWrapper = document.getElementsByClassName('swiper-wrapper');
const sectionButtons = nav.querySelectorAll('a');
const intro = document.querySelector('.intro');
const introTop = document.querySelector('.top');
const introBottom = document.querySelector('.bottom');


const buttonClassRemoval = () =>{
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].classList.remove('active');
    }
}
const classRemoval = () =>{
    swiperContainer[0].classList.add('none');
    swiperContainer[1].classList.add('none');
}
const introAnimationEvent = () =>{
    intro.classList.remove('none');
    intro.classList.add('active');
} 
for(let i = 0; i < sectionButtons.length; i++){
    sectionButtons[i].addEventListener('click', () => {
        buttonClassRemoval();
        sectionButtons[i].classList.add('active');
        if(sectionButtons[0].classList.contains('active')){
            contact.classList.add('none');
            swiperContainer[0].classList.add('none');
            swiperContainer[1].classList.remove('none');
        }
        if(sectionButtons[1].classList.contains('active')){
            contact.classList.add('none');
            swiperContainer[0].classList.remove('none');
            swiperContainer[1].classList.add('none');
        }
        if(sectionButtons[2].classList.contains('active')){
            classRemoval();
            contact.classList.remove('none');
        }
    });
}
    introTop.addEventListener('animationend', () => {
        intro.classList.remove('active');
        intro.classList.add('none');
      });
setTimeout(classRemoval, 0);
