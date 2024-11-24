/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    jQuery(function($){
      //TODO: figure out how to use jquery .on() so that we do not replicate this code
      $(document).ready(function() {
        $('#block-locale-language').clone().appendTo('#header-navigation-slider');      
        if ($(window).width() <= 767 ) {
          $('#header-navigation-slider').css("display", "none");
          $('#header-navigation-slider').prepend( $('#block-block-6') );
          $('#header-navigation-slider').prepend( $('#block-system-main-menu') );
          $('#header-navigation-switch').css("display", "block");
          $('.header__region').css("display", "none");
          $('#page-navigation').css("display", "none");          
        } else {
          $('#page-navigation>.region-page-navigation').append( $('#block-system-main-menu') );
          $('#page-navigation>.region-page-navigation').append( $('#block-block-6') );                  
          $('#page-navigation').css("display", "block");
          $('#block-system-main-menu').css("display", "block");
          $('#block-block-6').css("display", "block");          
          $('#header-navigation-switch').css("display", "none");          
          $('.header__region').css("display", "block");
          
          if ($('#secondary-content').height() > $('#primary-content').height()) {
            $('#primary-content').height($('#secondary-content').height());
          } else {
            $('#secondary-content').height($('#primary-content').height());
          }
        }
        
      });

      // Place your code here.
      $(window).resize(function(e) {
        //reset heights
        $('#primary-content').height('');
        $('#secondary-content').height('');
        if ($(window).width() <= 767 ) {
          $('#header-navigation-slider').css("display", "none");
          $('#header-navigation-slider').prepend( $('#block-block-6') );
          $('#header-navigation-slider').prepend( $('#block-system-main-menu') );
          $('#header-navigation-switch').css("display", "block");
          $('.header__region').css("display", "none");
          $('#page-navigation').css("display", "none");          
        } else {
          $('#page-navigation>.region-page-navigation').append( $('#block-system-main-menu') );
          $('#page-navigation>.region-page-navigation').append( $('#block-block-6') );                  
          $('#page-navigation').css("display", "block");
          $('#block-system-main-menu').css("display", "block");
          $('#block-block-6').css("display", "block");          
          $('#header-navigation-switch').css("display", "none");          
          $('.header__region').css("display", "block");
          
          if ($('#secondary-content').height() > $('#primary-content').height()) {
            $('#primary-content').height($('#secondary-content').height());
          } else {
            $('#secondary-content').height($('#primary-content').height());
          }
        }
        
      });
      $('#header-navigation-switch').click(function() {
        $('#header-navigation-slider').slideToggle();
      });
    });
  }
};

})(jQuery, Drupal, this, this.document);
;
