new WOW().init();

$(document).ready(function () {
  // -------   Active Mobile Menu - EDITED -----//

  $(".menu-bar").on('click', function (e) {
    e.preventDefault();
    $("nav").toggleClass('hide');
    $("span", this).toggleClass("fa-bars fa-times");
    $(".main-menu").addClass('mobile-menu');
  });

  // magnific popup
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title');
      }
    }
  });

});


$(window).on("scroll", function () {
  // Header fixed on scrolling
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  };

  // Parallax on home content
  var wScroll = $(this).scrollTop();
  $('.home-content').css({
    'transform': 'translate(0px, ' + wScroll / 8 + '%)'
  });
});

// navigation scroll or smoothscroll
$('nav a, .add-scroll').click(function (event) {
  var id = $(this).attr("href");
  var offset = 69;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 800);
  event.preventDefault();
});

// Isotope
