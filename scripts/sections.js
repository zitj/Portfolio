const nav = document.querySelector('nav');
const contact = document.querySelector('.contact');
const graphicDesign = document.querySelector('.swiper-container');
const sectionButtons = nav.querySelectorAll('a');

const buttonClassRemoval = () =>{
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].classList.remove('active');
    }
}
const classRemoval = () =>{
    graphicDesign.classList.add('none');
}

for(let i = 0; i < sectionButtons.length; i++){
    sectionButtons[i].addEventListener('click', () => {
        buttonClassRemoval();
        sectionButtons[i].classList.add('active');
        if(sectionButtons[0].classList.contains('active')){
            contact.classList.add('none');
            graphicDesign.classList.add('none');
        }
        if(sectionButtons[1].classList.contains('active')){
            contact.classList.add('none');
            graphicDesign.classList.remove('none');
        }
        if(sectionButtons[2].classList.contains('active')){
            graphicDesign.classList.add('none');
            contact.classList.remove('none');
        }
    });
}
setTimeout(classRemoval, 0);