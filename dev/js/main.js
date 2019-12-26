/*------DEPENDENCES
  -- jQuery
------DEPENDENCES end */


const _w = window,
      _d = document,
      _b = _d.body,
      _width = $(_w).width(),
      _height = $(_w).height(),
      _breakpoint = {
        tablet: 992,
        mobile: 768
      },
      _toTop = 400,
      _toTopAnimate = 500;

_w.onload = init();

function init() {

// BODY MARGIN TOP
_b.style.paddingTop = $('.header')[0].offsetHeight + 'px'
// BODY MARGIN TOP end

// SMOOTH SCROLL
$('.smooth-scroll').on('click', smoothScroll)
function smoothScroll(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    _b.scrollBy({
      top: $(hash).offset().top,
      behavior: "smooth"
    });
  }
}
// SMOOTH SCROLL end

// HEADER SCROLLING
let currentScroll = 0,
    hTop = $('.header__inner--top .header__wrap')[0].offsetHeight,
    header = $(".header");

function handlerStickyHeader(e) {
  let scroll = $(this).scrollTop();

  if (currentScroll > hTop) {
    header.css('transform', `translateY(-${hTop}px)`)
  }
  else {
    header.css('transform', `translateY(0px)`)
  }

  currentScroll = scroll;
}
// HEADER SCROLLING end

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

  if (_width < _breakpoint.mobile) {
    _b.scrollBy({
      top: $(`.products__content-item[data-id="${attrId}"]`).offset().top - 160,
      behavior: "smooth"
    });
  }
}
// PRODUCTS end

// SPECIAL OFFERS SLIDER
const specialOffersSlider = $('.js-special-offers-slider');

specialOffersSlider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  infinity: false,
  arrows: true,
  dots: false,
  prevArrow: $('.special-offers__nav--prev'),
  nextArrow: $('.special-offers__nav--next'),
  responsive: [
    {
      breakpoint: _breakpoint.tablet,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: _breakpoint.mobile,
      settings: {
        slidesToShow: 1
      }
    }
  ]
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
  autoplay: true,
  responsive: [
    {
      breakpoint: _breakpoint.tablet,
      settings: {
        slidesToShow: 3
      }
    }
  ]
})
// PARTNERS SLIDER end

// MODAL
const modalClass = 'modal',
      modalContainerClass = 'modal__container',
      modal = $('.' + modalClass),
      modalContainer = $('.' + modalContainerClass);

$('.js-modal').on('click', handlerOpenModal);
$('.modal__close').on('click', closeModal);

function handlerOpenModal() {
  const dest = $(this).attr('data-modal-type');
  if (!dest) return;

  openModal(dest);
}

function closeModal() {
  modal.removeClass('isOpen'),
  modalContainer.removeClass('isOpen')
}

function openModal(type) {
  modal.addClass('isOpen');
  $(`.${modalContainerClass}[data-type="${type}"]`).addClass('isOpen');
  if (_width < _breakpoint.mobile) closeMenu()
}

// MODAL end

// TO-TOP
const toTopEl = $('.to-top');
toTopEl.hide();

$(_b).scroll(function() {
  if ($(_b).scrollTop() > _toTop) {
      toTopEl.show();
  } else {
      toTopEl.hide();
  }
})

toTopEl.on('click', function(){
  $(_b).animate({scrollTop:0}, _toTopAnimate);
});
// TO-TOP end




// MOBILE
const headerWrapMobile = $('.header__wrap-mobile')

if (_width < _breakpoint.mobile) {
  $('.js-open-menu').on('click', handlerOpenMenu);
}

function handlerOpenMenu() {
  if (header.hasClass('isOpen')) {
    closeMenu()
  } else {
    header.addClass('isOpen')
    headerWrapMobile.slideDown()
  }
}

function closeMenu() {
  header.removeClass('isOpen')
  headerWrapMobile.slideUp()
}
// MOBILE end


if (_width > _breakpoint.mobile) {
  $(_b).on('scroll', handlerStickyHeader);
}

if (_width < _breakpoint.mobile) {
  closeMenu()

  $('.smooth-scroll').on('click', closeMenu)
}
}
