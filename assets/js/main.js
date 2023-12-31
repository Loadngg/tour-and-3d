$(document).ready(function () {
	$("#3d").interactive_3d({
		frames: 100,
		entrance: false,
		loading: "Загрузка, пожалуйста подождите...",
	});

	$(".slider").slick({
		arrows: true,
		dots: false,
		draggable: false,
		slidesToShow: 1,
		autoplay: false,
		infinity: true,
		swipe: false,
		touchMove: false,
	});
});

const tourButton = document.getElementById("tour-button");
const tourModal = document.getElementById("tour-modal");
const tour = document.getElementById("tour");

document.addEventListener("DOMContentLoaded", () => {
	const arrows = document.querySelectorAll(".slick-arrow");

	for (let arrow of arrows) {
		arrow.onclick = () => {
			if (!tourModal.classList.contains("hidden")) return;
			tourModal.classList.remove("hidden");
			setTimeout(function () {
				tourModal.classList.remove("transparent");
			}, 20);
			tour.src = "about:blank";
		};
	}
});

tourButton.onclick = () => {
	tourModal.classList.add("transparent");
	setTimeout(function () {
		tourModal.classList.add("hidden");
		tour.src = tour.dataset.src;
	}, 500);
};