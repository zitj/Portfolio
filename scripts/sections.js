const nav = document.querySelector('nav');
const sectionButtons = nav.querySelectorAll('a');

const buttonClassRemoval = () =>{
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].classList.remove('active');
    }
}

 for(const button of sectionButtons){
     button.addEventListener('click', ()=>{
         buttonClassRemoval();
         button.classList.add('active');
     })
 }
