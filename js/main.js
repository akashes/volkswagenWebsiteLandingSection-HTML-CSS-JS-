// hero swiper slider

const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	speed: 1000,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
	autoplay: {
		delay: 3000,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

let button = document.getElementsByClassName("toggle-button")[0];
let menu = document.getElementById("menu");

button.addEventListener("click", function () {
	menu.classList.toggle("openMenu");
});

let image = document.querySelectorAll(".image-wrapper");

let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
};

let imageObsever = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
						entry.target.classList.add("fade");

		
		}else{
									entry.target.classList.removeClass("fade");

		}
	});
	console.log(entries);
}, options);

image.forEach((images) => imageObsever.observe(images));
