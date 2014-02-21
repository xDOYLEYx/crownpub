// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// written by Liontheme
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

jQuery(document).ready(function() {
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// change menu on mobile version
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	domready(function(){
		selectnav('mainmenu', {
			label: 'Menu',
			nested: true,
			indent: '-'
		});
	});
	



	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// filtering gallery
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var $container = jQuery('#gallery');
		$container.isotope({
			itemSelector: '.item',
			filter: '*',
	});
	jQuery('#filters a').click(function(){
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
			}
		var $optionSet = $this.parents();
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
				
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({ 
		filter: selector,
	});
	return false;
	});
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// paralax background
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	$window = jQuery(window);
   	jQuery('section[data-type="background"]').each(function(){
    var $bgobj = jQuery(this); // assigning the object
                    
    jQuery(window).scroll(function() {
	var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
	var coords = '50% '+ yPos + 'px';
	$bgobj.css({ backgroundPosition: coords });
		
	});
 	});
	document.createElement("article");
	document.createElement("section");
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// prettyPhoto function
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	jQuery("area[data-gal^='prettyPhoto']").prettyPhoto();
	jQuery("body:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	jQuery("body:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		
	jQuery("#custom_content a[data-gal^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
	});
	jQuery("#custom_content a[data-gal^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
	});
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// scroll to top
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	jQuery().UItoTop({ easingType: 'easeInOutExpo' });
	  
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// gallery hover
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	jQuery('.gallery .item').hover(function() {
	jQuery(this).stop().animate({opacity: .5}, 100);
	}, function() {
	jQuery(this).stop().animate({opacity: 1});}, 100);
	
	
	jQuery('.img-hover').hover(function() {
	jQuery(this).stop().animate({opacity: .5}, 100);
	}, function() {
	jQuery(this).stop().animate({opacity: 1});}, 100);
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// resize
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	window.onresize = function(event) {
		jQuery('#gallery').isotope('reLayout');
  	};
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// show / hide slider navigation
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	jQuery('.main-slider.flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		
		start: function () {
				//jQuery(".slider-info").animate({"margin-left": "auto", "opacity": "toggle"},500);
		  },
		  after: function () {
				//jQuery(".slider-info").animate({"margin-left": "auto", "opacity": "toggle"},500);
		  },
		  before: function () {
				//jQuery(".slider-info").animate({"margin-left": "90", "opacity": "toggle"},300);
		  }
	  });
	
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// lazyload
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	 jQuery(function() {
          jQuery("img").lazyload({
              effect : "fadeIn",
			  effectspeed: 900 
          });
      });
	  
	  
	  	// --------------------------------------------------
		// tabs
		// --------------------------------------------------
		jQuery('.lt_tab').find('.lt_tab_content div').hide();
		jQuery('.lt_tab').find('.lt_tab_content div:first').show();
		
		jQuery('.lt_nav li').click(function() {
			jQuery(this).parent().find('li span').removeClass("active");
			jQuery(this).find('span').addClass("active");
			jQuery(this).parent().parent().find('.lt_tab_content div').hide();
		
			var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
			jQuery(this).parent().parent().find('.lt_tab_content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
		});

});

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	// lazyload
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	
	    jQuery(document).ready(function() {
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));
        
        jQuery(window).on("scroll", function() {
            var fromTop = jQuery(window).scrollTop();
            console.log(fromTop);
            jQuery("body").toggleClass("down", (fromTop > 240));
        });
    });


