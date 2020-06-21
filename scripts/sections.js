const nav = document.querySelector('nav');
const contact = document.querySelector('.contact');
const swiperContainer = document.querySelector('.swiper-container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const sectionButtons = nav.querySelectorAll('a');

let graphicDesignProjects = [
    {  
        img: 1,
        title: 'Oko sokolovo',
        link: '#',
    },
    {  
        img: 2,
        title: 'Kutre neko',
        link: '#',
    },
];

console.log(graphicDesignProjects);



const buttonClassRemoval = () =>{
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].classList.remove('active');
    }
}
const classRemoval = () =>{
    swiperContainer.classList.add('none');
}
 
for(let i = 0; i < sectionButtons.length; i++){
    sectionButtons[i].addEventListener('click', () => {
        buttonClassRemoval();
        sectionButtons[i].classList.add('active');
        if(sectionButtons[0].classList.contains('active')){
            contact.classList.add('none');
            swiperContainer.classList.add('none');
        }
        if(sectionButtons[1].classList.contains('active')){
            contact.classList.add('none');
            swiperContainer.classList.remove('none');
        }
        if(sectionButtons[2].classList.contains('active')){
            swiperContainer.classList.add('none');
            contact.classList.remove('none');
        }
    });
}

setTimeout(classRemoval, 0);