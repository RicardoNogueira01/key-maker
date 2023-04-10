const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
	navLinks.classList.toggle('nav-active');

	navLinksLi.forEach((li, index) => {
		if (li.style.animation) {
			li.style.animation = '';
		} else {
			li.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
		}
	});

	burger.classList.toggle('toggle');
});
