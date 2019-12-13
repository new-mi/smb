/*------DEPENDENCES
  -- jQuery
------DEPENDENCES end */

/*
  Если нужно, чтобы клики вызывали фокус для кнопок, нужно как можно раньше добавить этот JavaScript
  Когда вы удерживаете левую кнопку мыши: оба состояния :active и :focus вызываются только в Chrome.
  Состояние :focus совсем не вызывается в Safari и Firefox (Mac)
*/
document.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    event.target.focus();
  }
});

const _w = window,
      _d = document,
      _b = _d.body,
      _width = $(_w).width(),
      _height = $(_w).height();

_w.onload = init();

function init() {

// MAIN SLIDER
const mainSlider = $('.js-main-slider');

mainSlider.slick({
  infinity: true,
  autoplay: true,
  arrows: true,
  dots: false,
  prevArrow: $('.main-slider__nav--prev'),
  nextArrow: $('.main-slider__nav--next')
})
// MAIN SLIDER end

// PRODUCTS
$('.js-products-nav > .products__nav-item').on('click', handlerClickProduct)

function handlerClickProduct(e) {
  const attrId = $(this).attr('data-id');

  $(this).siblings().removeClass('isSelected')
  $(this).addClass('isSelected')

  $('.js-products-content > .products__content-item').addClass('hidden')
  $(`.products__content-item[data-id="${attrId}"]`).removeClass('hidden')
}
// PRODUCTS end

// SPECIAL OFFERS SLIDER
const specialOffersSlider = $('.js-special-offers-slider');

specialOffersSlider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinity: false,
  arrows: true,
  dots: false,
  prevArrow: $('.special-offers__nav--prev'),
  nextArrow: $('.special-offers__nav--next')
})
// SPECIAL OFFERS SLIDER end

// PARTNERS SLIDER
const partnersSlider = $('.js-partners-slider');
partnersSlider.slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinity: true,
  arrows: false,
  dots: false,
  autoplay: true
})
// PARTNERS SLIDER end

}
