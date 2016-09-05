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
  /*Toggle menu elements child visibility*/
  var ww = $(window).width();
  if (ww > 768){
    $( ".menu>li" ).hover(function() {
      $(this).find('ul').toggle();
    });
  }
  else{
    $( ".menu>li" ).click(function() {
      $(this).find('ul').slideToggle();
    });
  }
  /*Show or hide menu on mibl view*/
  $('.menutoggle').click(function() {
    console.log('haha');
    $('.menu').slideToggle();
  });
});


/*
$( "footer .up" ).click(function() {
  $('.hider').slideToggle();
});
*/
/*change lang*/
$( ".lang li" ).click(function() {
  var url = window.location.href;
  console.log(url);
});

/*Toggle visibilty of goup button*/
$(window).scroll(function () {
	var scrollPosition = $(this).scrollTop();
	$('.goup').attr('class', scrollPosition < 10 ? "goup" : "goup visb");
});

