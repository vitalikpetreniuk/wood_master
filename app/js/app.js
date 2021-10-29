// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import $ from 'jquery'

import "slick-carousel"

document.addEventListener('DOMContentLoaded', () => {

  // nav items
	$('.sidebar-list ul li:first-of-type').hover(() => {
    $('#category1').toggleClass('hidden-background')
  })

  $('.sidebar-list ul li:nth-last-of-type(2)').hover(() => {
    $('#category2').toggleClass('hidden-background')
  })

  $('.sidebar-list ul li:last-of-type').hover(() => {
    $('#category3').toggleClass('hidden-background')
  })

  const changeImage = (el, id, background) => {
    $(el).hover(() => {
      $('.menu').toggleClass(background)
      $('.menu__background .textur').toggleClass('d-none')
      $('.main-image').toggleClass('hidden')
      $(id).toggleClass('hidden')
      $('.header').toggleClass('index-m10')
    })
  }

  $(document).ready(function() {
    checkWidth();
  });
  $(window).on("resize", function(){
    checkWidth();
  });


  function checkWidth(){
    const $vWidth = $(window).width();
    $('#test').html($vWidth);

    //Check condition for screen width
    if($vWidth > 1280){
      changeImage('.menu__nav-list > li:first-of-type', '#home', 'bg-home')
      changeImage('.menu__nav-list > li:nth-of-type(2)', '#products', 'bg-products')
      changeImage('.menu__nav-list > li:nth-of-type(3)', '#about', 'bg-about')
      changeImage('.menu__nav-list > li:last-of-type', '#contacts', 'bg-contacts')
    }
  }

  let currentScrollPosition = 0;
  $(window).scroll(function () {
    let newScrollPosition = $(this).scrollTop();
    let header = $('.header-scroll')
    if (newScrollPosition > currentScrollPosition){
      // меняем класс по скроллу вниз
      if ($(this).scrollTop() > $('.header').height()) {
        $(header).removeClass('active')
      }
    } else {
      $(header).addClass('active')
      if (newScrollPosition === 0) {
        $(header).removeClass('active')
      }
    }
    currentScrollPosition = newScrollPosition;
  });

  $('.sidebar-top, .menu__right-close, .close, .header .burger, .header-scroll__right').on('click', () => {
    $('.menu').toggleClass('active')
    $('.main-content').toggleClass('d-none')
    $('.list-mobile').toggleClass('d-none')
    $('body').toggleClass('_over-hidden')
  })

  $('.menu__right-search').on('click', () => {
    $('.menu__search').toggleClass('active')
  })

  $('.menu__search .background').on('click', () => {
    $('.menu__search').toggleClass('active')
  })

  // slider

  $('.slider').slick({
    infinite: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false
        }
      }
    ]
  })

})
