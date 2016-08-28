$(document).ready(function() {
   



});

$( ".menu>li" ).hover(function() {
  $(this).find('ul').toggle();
});

$( "footer .up" ).click(function() {
  $('.hider').slideToggle();
});

$(window).scroll(function () {
	var scrollPosition = $(this).scrollTop();
	$('.goup').attr('class', scrollPosition < 10 ? "goup" : "goup visb");}
);