$(document).ready(function(){
  $('.carousel').slick({
  	infinite: true,
  	prevArrow: $('.prev'),
    nextArrow: $('.next'),
    lazyLoad: 'ondemand',
  });
/*Scroll to top*/
$('.goup').click(function() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 1000);
});
});

/*Toggle menu elements child visibility*/
$( ".menu>li" ).hover(function() {
  $(this).find('ul').toggle();
});
/*
$( "footer .up" ).click(function() {
  $('.hider').slideToggle();
});
*/
/*Toggle visibilty of goup button*/
$(window).scroll(function () {
	var scrollPosition = $(this).scrollTop();
	$('.goup').attr('class', scrollPosition < 10 ? "goup" : "goup visb");
});

