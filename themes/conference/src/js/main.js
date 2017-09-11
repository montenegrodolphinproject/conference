import 'bootstrap/js/dist/scrollspy';
import styles from './../css/main.sass';
import initGoogleMap from './googleMap';
import navigation from './navigation';

(function($) {
  'use strict';
  navigation.init();

  // --------------------------------------------------------------------
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  // --------------------------------------------------------------------
  var easeInOutExpo = function(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  };

  (function() {
    if (window.location.pathname !== '/') {
      return;
    }

    $('a.page-scroll').on('click', function(ev) {
      ev.preventDefault();
      var $anchor = $(ev.currentTarget);
      var href = $anchor.attr('href');
      if (href.indexOf('section') == -1) {
        window.location.href = href;
        return;
      }

      var el = $(href.charAt(0) === '/' ? href.substr(1) : href);
      $('html, body').stop().animate(
        {
          scrollTop: el.offset().top,
        },
        1200,
        easeInOutExpo,
      );
    });
  })();

  // --------------------------------------------------------------------
  // Closes the Responsive Menu on Menu Item Click
  // --------------------------------------------------------------------

  (function() {
    $('.navbar-collapse ul li a').on('click', function() {
      if (
        $(this).attr('class') != 'dropdown-toggle active' &&
        $(this).attr('class') != 'dropdown-toggle'
      ) {
        $('.navbar-toggle:visible').trigger('click');
      }
    });
  })();

  // --------------------------------------------------------------------
  // googleMap
  // --------------------------------------------------------------------

  var el = document.getElementById('googleMap');
  if (el) {
    var lat = document.getElementById('gmap-lat').value;
    var lng = document.getElementById('gmap-lng').value;
    initGoogleMap(el, lat, lng);
  }
})(jQuery); // JQuery end
