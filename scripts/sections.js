const nav = document.querySelector('nav');
const contactSection = document.querySelector('.contact');
const ovako = document.getElementById('ovako');
const swiperContainer = document.getElementsByClassName('swiper-container');
const swiperWrapper = document.getElementsByClassName('swiper-wrapper');
const sectionButtons = nav.querySelectorAll('a');
const intro = document.querySelector('.intro');
const introTop = document.querySelector('.top');
const introBottom = document.querySelector('.bottom');
const swipeIlustration = document.getElementsByClassName('swipeIlustration');

const graphicDesignSection = swiperContainer[0];
const webDesignSection = swiperContainer[1];

const buttonClassRemoval = () => {
	for (let i = 0; i < sectionButtons.length; i++) {
		sectionButtons[i].classList.remove('active');
	}
};
const swipeIlustrationAnimation = () => {
	for (let i = 0; i < swipeIlustration.length; i++) {
		swipeIlustration[i].classList.remove('none');
		swipeIlustration[i].addEventListener('animationend', () => {
			swipeIlustration[i].classList.add('none');
		});
	}
};
const classRemoval = () => {
	graphicDesignSection.classList.add('none');
	webDesignSection.classList.add('none');
};
const contactIntroAnimationTiming = () => {
	contactSection.classList.remove('none');
};
const introAnimationEvent = () => {
	intro.classList.remove('none');
	intro.classList.add('active');
};

for (let i = 0; i < sectionButtons.length; i++) {
	sectionButtons[i].addEventListener('click', () => {
		buttonClassRemoval();
		sectionButtons[i].classList.add('active');
		if (sectionButtons[0].classList.contains('active')) {
			contactSection.classList.add('none');
			graphicDesignSection.classList.add('none');
			webDesignSection.classList.remove('none');
			swipeIlustrationAnimation();
		}
		if (sectionButtons[1].classList.contains('active')) {
			contactSection.classList.add('none');
			graphicDesignSection.classList.remove('none');
			webDesignSection.classList.add('none');
			swipeIlustrationAnimation();
		}
		if (sectionButtons[2].classList.contains('active')) {
			classRemoval();
			contactSection.classList.remove('none');
		}
	});
}
introTop.addEventListener('animationend', () => {
	intro.classList.remove('active');
	intro.classList.add('none');
});

setTimeout(contactIntroAnimationTiming, 10);
setTimeout(classRemoval, 0);
