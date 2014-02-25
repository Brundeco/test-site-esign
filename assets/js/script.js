var $nav, UP = 'up', DOWN = 'down';

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
	$nav = $('.main-nav');
	$nav.before('<a href="#" id="nav-title"><i class="icon-hamburger"></i><span>Menu</span></a>');
	$('#nav-title').click(function(e) {
		e.preventDefault();
		$nav.slideToggle('fast');
	});
	
	
});

$(window).bind('enterBreakpoint767',function() {
	$nav.css('display', 'block');
});

$(window).bind('exitBreakpoint767',function() {
	$nav.css('display', 'none');
});