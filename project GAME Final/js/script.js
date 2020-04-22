$('.burger').click(function() {
  $('.nav').toggleClass('nav_visible');
  $('.header__button-shop').toggleClass('header__button-shop_active');
  $('.header__button-download').toggleClass('header__button-download_active');
  $('.header__buttons').toggleClass('header__buttons_active');
});

$('.header__button-help').click(function() {
  $('.modal').toggleClass('modal_active');
  $('.modal__window').toggleClass('modal__window_active');
});

$('.modal').click(function() {
  if(event.target == this || event.target.className == 'modal__close') {
    $('.modal').toggleClass('modal_active');
    $('.modal__window').toggleClass('modal__window_active');
  }
});

let gamesWindow = $('.slider-games__status');

for(let game of gamesWindow) {
  if(game.innerHTML.indexOf('Detected') != -1) {
    game.disabled = true;
  }
}


/* Прокрутка*/

universalScroll("get_license", 'license', 40);
universalScroll("get_cheat", 'cheat', 40);
universalScroll("get_apex", 'apex', 40);

function universalScroll(idButton, idPage, dressing) {
  let button = document.getElementById(idButton);
  let block = document.getElementById(idPage);

  button.addEventListener('click', getPage);
  let thisPageY; 
  function getPage() {
    if(pageYOffset < 500) {
      thisPageY = 500;
    }else {
      thisPageY = pageYOffset;
    }
    timerId = window.setInterval(timer, 20); 
  }

  function timer() { 
    window.scrollTo(0, pageYOffset + thisPageY/7); 
    if(pageYOffset > block.offsetTop - dressing) { 
      window.clearInterval(window.timerId); 
    } 
  }
}


/* Слайдеры */

$(document).ready(function(){
  $('.slider-main').slick({
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
      dots: false,
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