
$(document).ready(function(){
  var slider = $('.slider').bxSlider({
      controls: false,
      pager: false,
      adaptiveHeight: false
      
    });
    $('.slider__scroll__right').on('click', e => {
        e.preventDefault();
        slider.goToNextSlide();
    });
    $('.slider__scroll__left').on('click', e => {
        e.preventDefault();
        slider.goToPrevSlide();
    });
});


