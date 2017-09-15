$(document).ready(function(){

  setTimeout(function(){
    if($("ul.text-decoration").hasClass("hidden")){
        $("ul.text-decoration").removeClass("hidden");
    }
    if($(".job-title").hasClass("hidden")){
        $(".job-title").removeClass("hidden");
    }
  }, 500);

  var navPosition = $(".nav").offset().top;
  
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > navPosition) {
        $('.nav').addClass('nav--fixed');
    } else {
        $('.nav').removeClass('nav--fixed');
    }
  });

  $('a[href*="#"]:not([href="#"])').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-50
        }, 500);
    }
  });

  $(".nav__button").click(function(){
    $(".nav__menu").toggleClass("toggled");
  });

  $(".menu__button").click(function(){
    $(".nav__menu").toggleClass("toggled");
  });

  var menuLinks= $(".menu__link");

  for (var i = 0; i < menuLinks.length; i++) {
      var link = menuLinks[i];
      link.addEventListener('click',function(){
                $(".nav__menu").removeClass("toggled");
      }, false);
    }

});
