// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require ios-orientationchange-fix
//= require_tree .

$(document).ready(function(){

  // HTML-to-JSON plugin for API beta
  $('#json_convert').click( function() { 
    var table = $('#json_table').tableToJSON();
    document.getElementById('target').innerHTML = JSON.stringify(table);
  });

});

          // Change width value on page load
          $(document).ready(function(){
              responsive_resize();
          });

          // Change width value on user resize, after DOM
          $(window).resize(function(){
               responsive_resize();
          });

          function responsive_resize(){
            var current_width = $(window).width();
            if(current_width < 1028){
              $('html').addClass("screen_small").removeClass("scree_large");
              if ( !($('#navburger').hasClass('open')) ) {
                $('#drawer').hide();
              }
            } 
            if(current_width > 1028){
              $('html').addClass("screen_large").removeClass("screen_small");
              $('#drawer').show();
            }
          }


$(document).ready(function(){

  // Nav Drawer Open/Close
  $("#navburger").click(function(){
    $("#drawer").toggle();
    $(this).toggleClass('open');
  });

  // Make embedded videos responsive - via http://webdesignerwall.com/tutorials/css-elastic-videos
  $('#videos iframe').wrap('<div class="video-wrapper"><div class="video-container"></div></div>')
  var videos = $('#videos iframe');
  var size;
  $.each(videos, function() {
    size = $(this).attr('width');
    $(this).parent().parent().css('width',size);
  } );

});


// FitText! via http://fittextjs.com/
$(window).bind("load", function() {
  $("h1.fit").fitText(0.8, { minFontSize: '52px', maxFontSize: '80px' });
  $("h2.fit").fitText(0.8, { minFontSize: '30px', maxFontSize: '54px' });
  $("h3.fit").fitText(0.8, { minFontSize: '27px', maxFontSize: '32px' });
});

// Fast Click! via https://github.com/ftlabs/fastclick
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);