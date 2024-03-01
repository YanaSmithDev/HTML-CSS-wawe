$(function () {

  $(".header__nav-list a, .footer__logo").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.blog-slider').slick({
    dots: true,
    arrows: false,
  });

  $('.header__nav-btn,.header__top a').on('click', function(){
    $('.header__nav-list').toggleClass('header__nav-list--active');
  });

  // изменение цвета бэкграунда липкого хэдера при скроле 

  $(function() {
    let header = $('.header__top'),
        intro = $('.about');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > intro.outerHeight()) {
       header.addClass('header__top-white');
      } else {
       header.removeClass('header__top-white');
      }
    });
});

  var mixer = mixitup('.gallery__grid');
});

