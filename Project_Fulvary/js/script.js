/* NAVIGATION */
$('.burger').click(function() {
  $('.nav').toggleClass('nav_visible');
  $('.nav__link').toggleClass('nav__link_active');
  $('.header__phone').toggleClass('header__phone_active');
});

/* PLAY VIDEO */

$(".play").click(function() {
	$(this).parents(".video").html('<iframe width="100%" height="100%" src="' + $(this).attr("data-youtube") + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})

/* TASK CARTS  */

$(".task__box").click(function() {
	$(".task__box_active").removeClass('task__box_active');
	$(this).addClass('task__box_active');
	$(".task__box").css("background-color", "#fff");
	$(".task__box_active").css("background-color", $(this).find("path").attr("stroke"));
	$(".task__right_active").removeClass("task__right_active");
	$("#" + $(this).attr("data-numb")).addClass("task__right_active");

})

/* STAGES SLIDER CASTOM */

$('.stages__dot').click(function() {
	$('.stages__dot_active').removeClass('stages__dot_active');
	$(this).addClass('stages__dot_active');

	$('.stage__numb').css('color', '#000');
	$(this).find('.stage__numb').css('color', $(this).attr('data-color'));
	$('.stage__line').css('background-color', 'transparent');
	$(this).find('.stage__line').css('background-color', $(this).attr('data-color'));
	
	$('.stages__wrapper_active').removeClass('stages__wrapper_active');
	$('.' + $(this).attr('data-stage-window')).parent().addClass('stages__wrapper_active');
})

/* EXAMPLE */

$(".example__box").click(function() {
	$(this).toggleClass("example__box_noactive");
})


/* LOGOTIP */

$(".logotip__add").click(function() {
	$(this).css("display", "none");
	$(".logotip__content").css("max-height", "2500px");
})

/* MODAL */

$(".add__modal").click(function(event) {
	event.preventDefault();
	$(".modal__window").removeClass("modal__window_blue");
	$(".modal__window").removeClass("modal__window_red");
	$(".modal__button").removeClass("modal__button_blue");
	$(".modal__button").removeClass("modal__button_red");
	$(".modal__window").addClass("modal__window_" + $(this).attr("data-modal"));
	$(".modal__button").addClass("modal__button_" + $(this).attr("data-modal"));
	$(".modal").addClass("modal_active");
})

$(".modal__button").click(function(event) {
	event.preventDefault();
	$(".modal").removeClass("modal_active");

})

$(".modal__bg").click(function() {
	$(".modal").removeClass("modal_active");
})

/* SLIDERS */

/* TASK SLIDER */
if(document.documentElement.clientWidth >= 1139) {
	var sliderIsLive = false;
}else {
	var sliderIsLive = true;
	startSlide();
}

window.addEventListener("resize", function() {
  if (document.documentElement.clientWidth >= 1139) {
  	if(sliderIsLive != false) {
  		sliderIsLive = false;
	    $('.task__left').slick('unslick');
	}
  }
  else {
    if (sliderIsLive != true) {
      sliderIsLive = true;
      startSlide();
    }
  }
});

function startSlide() {
	$('.task__left').slick({
		infinite: false,
	  	slidesToShow: 5,
	  	slidesToScroll: 2,
	  	arrows:false,
	  	responsive: [
		    {
		      breakpoint: 1101,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 2,
		      }
		    },
		    {
		      breakpoint: 967,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 620,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
		    {
		    	breakpoint: 415,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
		  ]
	});
}

/* EXAMPLE SLIDER */

$('.example__slider').slick({
	infinite: false,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows:true,
  	prevArrow: $(".example__arrow-left"),
  	nextArrow: $(".example__arrow-right"),
  	responsive: [
	    {
	      breakpoint: 1290,
	      settings: {
	        arrows:false,
	      }
	    },
	  ]
});


/* COMMENT */

$('.comment__slider-video').slick({
	infinite: false,
  	slidesToShow: 4,
  	slidesToScroll: 4,
  	dots:true,
  	dotsClass:"comment__dots-video",
  	prevArrow: $(".comment__arrow-left_video"),
  	nextArrow: $(".comment__arrow-right_video"),
  	responsive: [
	    {
	      breakpoint: 1135,
	      settings: {
	        slidesToShow: 3,
  			slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 873,
	      settings: {
	        slidesToShow: 2,
  			slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 581,
	      settings: {
	        slidesToShow: 1,
  			slidesToScroll: 1,
	      }
	    },
	  ]
});

$('.comment__slider-document').slick({
	infinite: false,
  	slidesToShow: 4,
  	slidesToScroll: 4,
  	dots:true,
  	dotsClass:"comment__dots-video",
  	prevArrow: $(".comment__arrow-left_document"),
  	nextArrow: $(".comment__arrow-right_document"),
  	responsive: [
	    {
	      breakpoint: 1155,
	      settings: {
	        slidesToShow: 3,
  			slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 865,
	      settings: {
	        slidesToShow: 2,
  			slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 585,
	      settings: {
	        slidesToShow: 1,
  			slidesToScroll: 1,
	      }
	    },
	  ]
});

$('.comment__slider-word').slick({
	infinite: false,
  	slidesToShow: 3,
  	slidesToScroll: 3,
  	dots:true,
  	dotsClass:"comment__dots-video",
  	prevArrow: $(".comment__arrow-left_word"),
  	nextArrow: $(".comment__arrow-right_word"),
  	responsive: [
	    {
	      breakpoint: 1155,
	      settings: {
	        slidesToShow: 2,
  			slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 781,
	      settings: {
	        slidesToShow: 1,
  			slidesToScroll: 1,
	      }
	    },
	  ]
});