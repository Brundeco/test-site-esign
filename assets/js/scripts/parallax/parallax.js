window.parallax = window.parallax || {};

parallax.init = function () {
	
	// only do skrollr if not mobile
	if( !esign.cache.IS_MOBILE ) {
		parallax.renderElements();
    
		//init skrollr
		var s = skrollr.init({
			smoothScrolling: true,
			forceHeight: false,
			smoothScrollingDuration: 500
		});
		
		//refresh skrollr on window resize
		$(window).resize(function() {
			s.refresh();
		});
	}
	
	//init waypoints
	parallax.makeWaypoints();

};

parallax.renderElements = function () {
  	
	var $skrollrItems = $('.skrollr');
  	
  	for (var i=0, j=$skrollrItems.length; i < j; i++) {
		
		parallax.setAnimations($($skrollrItems[i]));
		
	};
  
};

parallax.setAnimations = function (el) {

	var sizes = {
		'small' : 20,
		'medium' : 40,
		'large' : 60,
		'xlarge' : 200
	};
  
	// standard parallax animations
	for (var index in sizes) {
	
		//top to bottom
		if (el.hasClass("skrollr-top-to-bottom-" + index)) {
			el.attr("data-top-bottom", "transform[sqrt]:translate3d(0, " + sizes[index] + "px, 0);");
			el.attr("data-bottom-top", "transform[sqrt]:translate3d(0, -" + sizes[index] + "px, 0);");
		}
    
		// bottom to top
		if (el.hasClass("skrollr-bottom-to-top-" + index)) {    
			el.attr("data-top-bottom", "transform[sqrt]:translate3d(0, -" + sizes[index] + "px, 0);");
			el.attr("data-bottom-top", "transform[sqrt]:translate3d(0, " + sizes[index] + "px, 0);");
		}
	}
    
  	// background animations
	$(window).resize(function() {
    
    	for (var index in sizes) {
    		
    		// top to bottom
			if (el.hasClass("skrollr-bg-top-to-bottom-" + index)) {
          
				parallax.createWrap(el);
				parallax.scaleElement(el,index,sizes);
        
				el.attr("data-top-bottom", "transform[sqrt]:translate3d(0, " + sizes[index] + "px, 0);");
				el.attr("data-bottom-top", "transform[sqrt]:translate3d(0, -" + sizes[index] + "px, 0);");
  
			}
      
			//bottom to top
			if (el.hasClass("skrollr-bg-bottom-to-top-" + index)) { 
        
				parallax.createWrap(el);
				parallax.scaleElement(el,index,sizes);
        
				el.attr("data-top-bottom", "transform[sqrt]:translate3d(0, -" + sizes[index] + "px, 0);");
				el.attr("data-bottom-top", "transform[sqrt]:translate3d(0, " + sizes[index] + "px, 0);");
        
			}
      
		}
    
	});
  
	$(window).trigger('resize');
  
};

parallax.makeWaypoints = function () {

	$('.skrollr.animate').waypoint(function() {
      
		if ($(this.element).hasClass('fadeIn')) {
			$(this.element).addClass('show');
		}
		
    }, 
	{ 
		offset: '85%'
  	});
  	
};

parallax.createWrap = function (el) {
  
  if(! el.parents('.overflow-wrap').length ) {
  
    el.wrap( "<div class='overflow-wrap'></div>" );
    el.wrap( "<div class='scale-wrap'></div>" );
  
  }
  
};

parallax.scaleElement = function (el,indexParam,sizes) {
  
	// calculate how much scaling is needed
	var scaleVal = 1.0;
  
	for (var index in sizes) {
    
		if (index == indexParam) {
			
      		var initHeight = el.outerHeight(),
      			extraSize = 2 * sizes[index],
      			newHeight = initHeight + extraSize;
      		
      		scaleVal = newHeight / initHeight;
      		scaleVal = scaleVal * scaleVal - (scaleVal - 1 ) / 2;
      		
    	}
 	}
    
	//scale the wrap
	el.parents(".scale-wrap").css({
		'-webkit-transform': 'scale(' + scaleVal + ')',
        '-moz-transform': 'scale(' + scaleVal + ')',
        '-ms-transform': 'scale(' + scaleVal + ')',
        '-o-transform': 'scale(' + scaleVal + ')',
        'transform': 'scale(' + scaleVal + ')'
    });
  
};

$(window).load(function() {
	parallax.init();
});