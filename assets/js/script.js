var $nav;

$(function() {
	
	$(window).setBreakpoints({
	    distinct: true, 
	    breakpoints: [
	        767
	    ] 
	});
	
	/* ELEMENTS */
	if ( typeof $.fancybox == 'function') {
		$(".fancybox").fancybox({
			openEffect : 'elastic',
			closeEffect : 'none',
			loop : false,
			helpers : {
		        overlay : {
		            locked : false
		        }
		    },
			afterShow: function() {
                if ('ontouchstart' in document.documentElement){
                    $('.fancybox-nav').css('display','none');
                    $('.fancybox-wrap').swipe({
                        swipe : function(event, direction) {
                            if (direction === 'left' || direction === 'up') {
		                        $.fancybox.next();
                            } else {
                            	$.fancybox.prev();
                            }
                        }
                    });
                }
            }
		});
	}
	
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
	
	
});

$(window).bind('enterBreakpoint767',function() {
	$nav.css('display', 'block');
});

$(window).bind('exitBreakpoint767',function() {
	$nav.css('display', 'none');
});