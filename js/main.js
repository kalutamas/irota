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
      $(this).find('ul').fadeToggle(300);
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

/*Menu stay green on child's hover*/
$('.menu>li ul').mouseenter(function(){
 $(this).parent('li').addClass('hovered');
});
$('.menu>li ul').mouseleave(function(){
 $(this).parent('li').removeClass('hovered');
});

/*
$( "footer .up" ).click(function() {
  $('.hider').slideToggle();
});
*/

/*change lang*/
$( ".lang li a" ).click(function() {
  var actlang = $(".lang li.active a").html()
  url = window.location.href
  actli = $(this).html();
  array = url.split("/"+actlang+"/")
  newurl = (array[0] + "/" + actli + "/" + array[1]);
  if ( actli != actlang) {
    window.location = newurl;
  }
});
/*Toggle visibilty of goup button*/
$(window).scroll(function () {
	var scrollPosition = $(this).scrollTop();
	$('.goup').attr('class', scrollPosition < 450 ? "goup" : "goup visb");
});

