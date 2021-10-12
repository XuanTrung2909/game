const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab, index) => {
	const panel = panels[index];
	tab.onclick = function () {
		document.querySelector(".tab.active").classList.remove("active");
		document
			.querySelector(".tab-panel.active-panel")
			.classList.remove("active-panel");
		this.classList.add("active");
		panel.classList.add("active-panel");
	};
});

$(".banner").slick({
	autoplay: true,
	autoplaySpeed: 1000,
	arrows: false,
});

// $("#gameH5").slick({
// 	autoplay: true,
// 	slidesToShow: 5,
// 	slidesToScroll: 5,
// 	responsive: [
// 		{
// 			breakpoint: 767,
// 			settings: {
// 				slidesToShow: 4,
// 				slidesToScroll: 4,
// 			},
// 		},
// 		{
// 			breakpoint: 575,
// 			settings: {
// 				slidesToShow: 3,
// 				slidesToScroll: 3,
// 			},
// 		},
// 	],
// });

function copyValue(url) {
	var copyText = document.getElementById(url);

	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
}
