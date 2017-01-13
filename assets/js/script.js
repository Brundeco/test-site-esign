var $nav;

$(function() {
	
	Response.create({
	    prop: "width", 
	    prefix: "min-width- r src", 
	    breakpoints: [752,0],
	    lazy: true
	});

	/* NAVIGATION */
	$nav = $('.nav-wrap');
	$('.main-nav .trigger').click(function(e) {
		e.preventDefault();
		$(this).next('.nav-wrap').slideToggle('fast');
	});
	
	/* ELEMENTS */
	$(".blocklink").click(function(){
		var $target = $(this).find("a.target");
		var new_window = ( $target.attr('target') === '_blank' );
		if($target.length && $target.attr('href') !== '#') {
			if(new_window){
				window.open($target.attr("href"),'_blank');
			}else{
				window.location=$target.attr("href");
			}
		}
		return false;
	});
	
	/* RESPONSIVE */
	Response.crossover('width', function() {
		if(Response.band(752)) {
			$nav.css('display', 'block');
		} else {
			$nav.css('display', 'none');
		}
	});
	
	
	/*
	 * newsletter subscribe via js/json
	 */
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
	
	/* responsive video */
	$('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"], iframe[src*="player.vimeo"]').wrap('<div class="video-container"></div>');

	
});
