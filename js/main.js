$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    /*lazyLoad: 'ondemand',*/
  });
  /*Scroll to top*/
  $('.goup').click(function() {
      $('html, body').animate({
          scrollTop: $('html').offset().top
      }, 1000);
  });
  /*Toggle menu elements child visibility*/
  var ww = $(window).width();
  if (ww > 768){
    // $( ".menu>li" ).hover(function() {
    //   $(this).find('ul').fadeToggle(300);
    // });
    // /*Menu stay green on child's hover*/
    // $('.menu>li ul').mouseenter(function(){
    //  $(this).parent('li').addClass('hovered');
    // });
    // $('.menu>li ul').mouseleave(function(){
    //  $(this).parent('li').removeClass('hovered');
    // });
  }
  else{
    $(document).on('click','.menu>li .fa-plus',function(){
      $(this).removeClass('fa-plus');
      $(this).addClass('fa-minus');
      $(this).parent('li').find('ul').slideDown();
    });
    $(document).on('click','.menu>li .fa-minus',function(){
      $(this).removeClass('fa-minus');
      $(this).addClass('fa-plus');
      $(this).parent('li').find('ul').slideUp();
    });
  }
  /*Show or hide menu on mibl view*/

  $(document).on('click','.menutoggle.open',function(){
    $('.menu').slideUp();
    $('.menutoggle i').removeClass('fa-times');
    $('.menutoggle i').addClass('fa-bars');
    $('.menutoggle').removeClass('open');
    $('.menuwrap').removeClass('open');
    $('html').removeClass('menuopen');
  });

  $(document).on('click','.menutoggle:not(.open)',function(){
    $('.menu').slideDown();
    $('.menutoggle i').removeClass('fa-bars');
    $('.menutoggle i').addClass('fa-times');
    $('.menutoggle').addClass('open');
    $('.menuwrap').addClass('open');
    $('html').addClass('menuopen');
  });

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
	$('.goup').attr('class', scrollPosition < 100 ? "goup" : "goup visb");
});



function visiblemenu() {
  var ww = $(window).width();
  if ( ww > 768 ) {
    $('.menu').attr('style', function(i, style){
        return style.replace(/display[^;]+;?/g, '');
    });
  }
}

$(document).ready(function() {
    adjustDivHeight();
    $('.logo').delay(5000).fadeOut(400);
    $(window).resize(function() {
        adjustDivHeight();
        visiblemenu();
    });
});


function adjustDivHeight() {
  var ww = $(window).width();
    if ( ww < 992 ) {
    setTimeout(function() {
        var width = $('body').width();
        var height = width * 0.5589123;
        $('.carousel-container').height(height);
    }, 300);
  }
}

$(window).scroll(function () {
  adjustDivHeight();
});


function setmenuheight() {
  var wh = $(window).outerHeight();
  var ww = $(window).width();
  if ( ww < 768 ) {
    if(window.orientation == 0) // Portrait
      {  
        $('.menu').css('max-height', wh - 60);
        console.log('wh: ' + wh);
        
      }
      else{
        $('.menu').css('max-height', 'inherit');
      }
  }
}
$(document).ready(function() {
  setmenuheight();
});
$(window).resize(function() {
  setmenuheight();
});
$(window).on("orientationchange",function(){
 setmenuheight();
});