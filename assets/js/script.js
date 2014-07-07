var $nav;

$(function() {
	
	Response.create({
	    prop: "width", 
	    prefix: "min-width- r src", 
	    breakpoints: [767,0], 
	    lazy: true
	});
	
	/* ELEMENTS */
	if(Modernizr.touch) {
		$('.cycle-slideshow').each(function(index){
			$(this)
				.swipe({
	                swipe : function(event, direction) {
	                    if (direction === 'left' || direction === 'up') {
	                        $(this).cycle('next');
	                    } else {
	                        $(this).cycle('prev');
	                    }
	                }, allowPageScroll:"vertical"
	            });
		});
	}
	
	/* NAVIGATION */
	$nav = $('.nav-wrap');
	$('.main-nav .trigger').click(function(e) {
		e.preventDefault();
		$(this).next('.nav-wrap').slideToggle('fast');
	});
	
	/* RESPONSIVE */
	Response.crossover('width', function() {
		
		if(Response.band(767)) {
			$nav.css('display', 'block');
		} else {
			$nav.css('display', 'none');
		}
		
	});
	
});
