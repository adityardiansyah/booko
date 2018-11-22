ScrollReveal().reveal('.book-product',{
	interval: 100,
	origin: 'bottom',
	distance: '10%',
});
ScrollReveal().reveal('#left-banner', {
	origin: 'left',
	distance: '150%',
	easing : 'ease',
	duration : 1000,
});
ScrollReveal().reveal('#right-banner', {
	origin: 'right',
	distance: '150%',
	easing : 'ease',
	duration : 1000,
});
$('.trending-book').slick({
	infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});