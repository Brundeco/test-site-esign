window.esign = window.esign || {};

esign.cacheSelectors = function () {
	esign.cache = {
		// general
		$html: $('html'),

		// navigation
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
	
	esign.gaDevelopment();
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
	$('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"], iframe[src*="player.vimeo"]').wrap('<div class="video-container"></div>');
};

esign.blockLink = function () {
	$('.block-link').click(function(e) {
		e.preventDefault();
		var url = $(this).find('.target').attr('href');
		window.location = url;
	});
};

/* ajax newsletter subscribe */
esign.newsletter = function () {
	$('.form-newsletter').submit(function(e) {
		$form = $(this);
		
		$.post($form.attr('action'), $form.serializeArray(), function(data) {
			if(data.errors === false) {
				$form.html(data.result);
			} else {
				$form.find('.result').html(data.result);
			}
		});
		
		e.preventDefault();
		return false;
	});
};

/* log ga calls in development */
esign.gaDevelopment = function() {
	if (typeof ga === typeof undefined) {
		window.ga = function() {
			var argumentsArray = [];
			for (var key in arguments) {
				if (arguments.hasOwnProperty(key)) {
					argumentsArray.push(arguments[key]);
				}
			}
			var msg = '[GA DEV] Call with arguments [' + argumentsArray.join(',') + ']';
			console.log('%c' + msg, 'background: #ff9800; color: #fff;');
		};
	}
};

// initialize on docready
$(esign.init);