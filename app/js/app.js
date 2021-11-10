// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import $ from 'jquery'

import "slick-carousel"
import validate from "jquery-validation"

document.addEventListener('DOMContentLoaded', () => {

  $('.header__right').hover(() => {
    $('.header__right > span').toggleClass('visible')
  })

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

  const changeImage = (el, background) => {
    $(el).hover(() => {
      if (!$('.menu').hasClass(background)) {
        $('.menu').addClass(background)
        $('.menu__background .textur').addClass('d-none')
        $('.main-image').addClass('hidden')
        $('.header').addClass('index-m10')
      } else {
        $('.menu').removeClass(background)
        // $('.menu__background .textur').removeClass('d-none')
        $('.main-image').removeClass('hidden')
        $('.header').removeClass('index-m10')
      }
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
      changeImage('.menu__nav-list > li:first-of-type', 'bg-home')
      changeImage('.menu__nav-list > li:nth-of-type(2)', 'bg-products')
      changeImage('.menu__nav-list > li:nth-of-type(3)', 'bg-about')
      changeImage('.menu__nav-list > li:last-of-type', 'bg-contacts')
      changeImage('.menu__nav-list > li:nth-of-type(2) > ul > li:first-of-type', 'bg-construct')
      changeImage('.menu__nav-list > li:nth-of-type(2) > ul > li:nth-of-type(2)', 'bg-prod')
      changeImage('.menu__nav-list > li:nth-of-type(2) > ul > li:last-of-type', 'bg-furniture')
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

  $('.sidebar-top, .menu__right-close, .close, .header > .burger, .header-scroll .burger-main, .header-scroll__right, .header__right').on('click', () => {
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
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false
        }
      }
    ]
  })

  let formContacts = document.querySelectorAll('.form-contacts')

  formContacts.forEach(element => {
    $(element).validate({
      rules: {
        name: {
          required: true
        },
        phone: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Please enter your name'
        },
        phone: {
          required: 'Please enter your phone'
        }
      }
    })

  })

  $('.form-contacts button[type="submit"]').click((e) => {
    if ($('.page-contacts .form-contacts').valid() && $('.page-contacts-mobile .form-contacts').valid()) {
      e.preventDefault()
      $('.modal, .background-modal').toggleClass('active')
      $('body').toggleClass('_over-hidden')
    }
  })

  $('.modal .close-modal, .background-modal').click(() => {
    $('.modal, .background-modal').removeClass('active')
    $('body').removeClass('_over-hidden')
  })

})
