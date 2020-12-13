//import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

$(() => {
	$('.header__slider').slick({
        autoplay: true,
        speed: 500,
        infinite: true,
        prevArrow: $('.button__prev'),
        nextArrow: $('.button__next')
    });

    $('.example-slider').slick({
        autoplay: true,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.example__button__prev'),
        nextArrow: $('.example__button__next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 798,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.feedback__accordion-item__title').click(function() {
        if ($('.feedback__accordion').hasClass('one')){
            $('.feedback__accordion-item__title').not($(this)).removeClass('active');
            $('.feedback__accordion-item__text').not($(this).next()).slideUp(300);           
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $('.nav__burger').click(function(event) {
      $('.nav__burger, .nav__menu').toggleClass('active');
      $('body').toggleClass('lock');
    });

    $('.nav-link').click(function(event) {
      $('.nav__burger, .nav__menu').removeClass('active')
      $('body').removeClass('lock');
    });

    $('#form').submit(function() { 
      if (document.form.name.value == '' || document.form.phone.value == '' || document.form.email.value == '' || document.form.type.value == '') {
        valid = false;
        return valid;
      }
      $.ajax({
        type: "POST",
        url: "mail/mail.php",
        data: $(this).serialize()
      }).done(function() {
        //$('.js-overlay-thank-you').fadeIn();
        $(this).find('input').val('');
        $('#form').trigger('reset');
      });
      return false;
    });
});
