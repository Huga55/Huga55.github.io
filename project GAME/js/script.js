$('.burger').click(function() {
  $('.nav').toggleClass('nav_visible');
});



$(document).ready(function(){
  $('.slider-main').slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
      dots: true,
      dotsClass: 'header__switches',
      arrows:false,
  });
});