$(function () {
  $('.blog-slider').slick({
    dots: true,
    arrows: false,
  });

  $('.header__nav-btn').on('click', function(){
    $('.header__nav-list').toggleClass('header__nav-list--active');
    
  });

  var mixer = mixitup('.gallery__grid');
});

