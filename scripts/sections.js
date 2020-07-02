const nav = document.querySelector('nav');
const contactSection = document.querySelector('.contact');
const ovako = document.getElementById('ovako');
const swiperContainer = document.getElementsByClassName('swiper-container');
const swiperWrapper = document.getElementsByClassName('swiper-wrapper');
const sectionButtons = nav.querySelectorAll('a');
const intro = document.querySelector('.intro');
const introTop = document.querySelector('.top');
const introBottom = document.querySelector('.bottom');

const graphicDesignSection = swiperContainer[0];
const webDesignSection = swiperContainer[1];


const buttonClassRemoval = () =>{
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].classList.remove('active');
    }
}

const classRemoval = () =>{
    graphicDesignSection.classList.add('none');
    webDesignSection.classList.add('none');
}
const contactIntroAnimationTiming = () =>{
    contactSection.classList.remove('none');
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
            contactSection.classList.add('none');
            graphicDesignSection.classList.add('none');
            webDesignSection.classList.remove('none');
        }
        if(sectionButtons[1].classList.contains('active')){
            contactSection.classList.add('none');
            graphicDesignSection.classList.remove('none');
            webDesignSection.classList.add('none');
        }
        if(sectionButtons[2].classList.contains('active')){
            classRemoval();
            contactSection.classList.remove('none');
        }
    });
}
introTop.addEventListener('animationend', () => {
    intro.classList.remove('active');
    intro.classList.add('none');
    // contact.classList.remove('none');
      });
setTimeout(contactIntroAnimationTiming, 1490);
setTimeout(classRemoval, 0);