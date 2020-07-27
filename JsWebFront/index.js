const NavSlides = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const Navlinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		Navlinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navlinkfade 0.5s ease forwards ${
					index / 7 + 1
				}s`;
				// console.log(index / 7);
			}
		});
		burger.classList.toggle('toggle');
	});
};

NavSlides();
