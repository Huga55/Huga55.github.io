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

/* Фиксированное меню */

window.addEventListener('scroll', function() {
  if(pageYOffset > 5) {
    $('.nav__list').addClass('nav__list_fix');
  }else {
    $('.nav__list').removeClass('nav__list_fix');
  }
});

/* Прокрутка*/

universalScroll("get_license", 'license', 0);
universalScroll("get_cheat", 'cheat', 0);
universalScroll("get_apex", 'apex', 0);
universalScroll("get_header", 'body', 0);

function universalScroll(idButton, idPage, dressing) {
  let button = document.getElementById(idButton);
  let block = document.getElementById(idPage);

  button.addEventListener('click', getPage);
  let thisPageY; 
  let direction;
  function getPage(event) {
    event.preventDefault();
    if(pageYOffset < 500) {
      thisPageY = 500;
    }else {
      thisPageY = pageYOffset;
    }

    clearTimer();

    if(pageYOffset < block.offsetTop) {
      timerId = window.setInterval(timerDown, 20); 
    }else {
      thisPageY = 500;
      timerId = window.setInterval(timerUp, 20); 
    }
  }

  function timerDown() {
    if(pageYOffset >= block.offsetTop - dressing) { 
      window.clearInterval(window.timerId); 
      return;
    }  
    if((block.offsetTop - pageYOffset - dressing) > thisPageY/7) {
      window.scrollTo(0, pageYOffset + thisPageY/7);
    }else {
      window.scrollTo(0, pageYOffset + (block.offsetTop - pageYOffset - dressing)); 
    }
  }

  function timerUp() {
    if(pageYOffset <= block.offsetTop + dressing) { 
      window.clearInterval(window.timerId); 
      return;
    }  
    window.scrollTo(0, pageYOffset - thisPageY/7);
    if((pageYOffset - block.offsetTop - dressing) > thisPageY/7) {
      window.scrollTo(0, pageYOffset - thisPageY/7); 
    }else {
      window.scrollTo(0, pageYOffset - (pageYOffset - block.offsetTop - dressing));
    } 
  }

  function clearTimer() { //функция для разрешения конфликта одновременной работы
    window.clearInterval(window.timerId);
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