let slider = document.querySelector(".slider");

function toggleClasses() {
	let body = document.querySelector("body");
	let header = document.querySelector("header");
	let div = document.querySelectorAll("div");
	let h2 = document.querySelector(".light-h1");
	let darkMode = document.querySelector(".dark-mode")

	body.classList.toggle("dark");
	header.classList.toggle("dark-top");
	h2.classList.toggle("dark-h1");
	darkMode.classList.toggle("dark-font")

	div.forEach(function(item) {
		if (item.classList.contains("card")) {
			item.classList.toggle("dark-card")
		};
	})
};

slider.addEventListener("click", toggleClasses)