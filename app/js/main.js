$(function () {
  $('.banner').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  });

  $('.nav__btn').on('click', function () {
    $('.nav__list').toggleClass('active');
    $(this).toggleClass('active');
  });


});