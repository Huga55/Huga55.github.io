$('.burger').click(function() {
  $('.nav').toggleClass('nav_visible');
});

$('.header__button-help').click(function() {
  $('.modal').toggleClass('modal_active');
  $('.modal__window').toggleClass('modal__window_active');
});

$('.modal__close').click(function() {
  $('.modal').toggleClass('modal_active');
  $('.modal__window').toggleClass('modal__window_active');
})

let gamesWindow = $('.slider-games__status');

for(let game of gamesWindow) {
  if(game.innerHTML.indexOf('Detected') != -1) {
    game.disabled = true;
  }
}


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


$(document).ready(function(){
  $('.slider-games').slick({
      infinite: true,
      centerMode: true,
      centerPadding: '110px',
      slidesToShow: 5,
      prevArrow: '.roll-games__left',
      nextArrow: '.roll-games__right',
      autoplay: true,
      autoplaySpeed: 2500,
         responsive: [
      {
        breakpoint: 1078,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 956,
        settings: {
          centerPadding: '100px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 794,
        settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 565,
        settings: {
          centerPadding: '0px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 408,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
        }
      },
    ]
  });
});