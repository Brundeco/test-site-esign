window.esign = window.esign || {};

esign.cacheSelectors = function () {
	esign.cache = {
		// General
		$html: $('html'),

		// Navigation
		$nav: $('.nav-wrap')

	};
};

esign.init = function () {
	Response.create({
	    prop: "width", 
	    prefix: "min-width- r src", 
	    breakpoints: [767,0], 
	    lazy: true
	});
	
	esign.cacheSelectors();
	
	esign.navigation();
	esign.responsiveVideos();
	esign.blockLink();
	esign.newsletter();
};

esign.navigation = function () {
	$('.main-nav .trigger').click(function(e) {
		e.preventDefault();
		$(this).next('.nav-wrap').slideToggle('fast');
	});
	
	Response.crossover('width', function() {
		if(Response.band(767)) {
			esign.cache.$nav.css('display', 'block');
		} else {
			esign.cache.$nav.css('display', 'none');
		}
	});
};

esign.responsiveVideos = function () {
	$('iframe[src*="youtube.com/embed"]').wrap('<div class="video-wrapper"></div>');
	$('iframe[src*="player.vimeo"]').wrap('<div class="video-wrapper"></div>');
};

esign.blockLink = function () {
	$('.block-link').click(function(e) {
		e.preventDefault();
		var url = $(this).find('.target').attr('href');
		window.location = url;
	});
};

esign.newsletter = function () {
	/* newsletter subscribe via ajax */
	$('.form-newsletter').submit(function(e){
		$form = $(this);
		
		$.post($form.attr('action'),$form.serializeArray(),function(data){
			if(data.errors === false){
				$form.html(data.result);
			}else{
				$form.find('.result').html(data.result);
				
			}
		});
		
		e.preventDefault();
		return false;
	});
};

// initialize on docready
$(esign.init);