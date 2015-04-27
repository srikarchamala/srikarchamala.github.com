jQuery(function() {
  
  var $ = jQuery;
  
  $('body').addClass('postload');

  $(document).ready(function() {

    // General form styling  

    $('.wsite-form-radio-container, .wsite-com-product-option-dropdown, .wsite-com-product-option-radio').jqTransform();

    // Transition nav bg
      
    $('#main-wrap').waypoint(function() {
      $("body").toggleClass('darken');
    }, {offset: -10});


    // Add current class to store gallery thumb
    
    var galleryLink = $("#wsite-com-product-images-strip a");
    var currentClass = "current";
    
    galleryLink.first().addClass(currentClass);
    galleryLink.click(function(){
      $("."+currentClass).removeClass(currentClass);
      $(this).addClass(currentClass);
    });
    
    // Add fullwidth class to gallery thumbs if less than 6

  	$('.imageGallery').each(function(){
  	  if ($(this).children('div').length <= 6) {
  	    $(this).children('div').addClass('fullwidth-mobile');
  	  }
  	});

    // Add search to mobile menu if present
    
    var headerSearch = $("#header .wsite-search");
    var navMobile = $("#navmobile");

    if (headerSearch.length) {
      navMobile.prepend('<div class="search">'+headerSearch.parent().html()+'</div>');
    }
  
  // End doc ready function
  });
  
});

