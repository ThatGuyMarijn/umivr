document.addEventListener("DOMContentLoaded", () => {
	const images = [
		"https://i.imgur.com/vGmNfa7.jpeg",
		"https://i.imgur.com/IFqTmOf.jpeg"
	];

	const random = Math.floor(Math.random() * images.length);
	const selected = images[random];

	document.body.style.backgroundImage = `url(${selected})`;
	document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
});