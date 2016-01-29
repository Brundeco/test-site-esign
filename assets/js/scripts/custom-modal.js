/* Custom modal 
 * Basic custom modal for custom css effects & layout
 * based on: http://tympanus.net/Development/ModalWindowEffects/
 * 
 * requires: esign.cache.IS_MOBILE
 *
 * 2 possibilities:
 * - cover: width & height from window
 * - fixed width & height: 
 *   when height is greater then window height it converts to the cover layout 
 */

esign.modals = function () {
	
	// btns
	$('.modal-button, .main-modal-trigger').click(function(e) {
		e.preventDefault();
		var $modal;
		
		if($(this).hasClass('main-modal-trigger')) {
			$modal = $('#main-modal');
		} else {							  
			$modal = $($(this).attr('href'));
		}
		
		/* convert to md-cover if height > window height or device is mobile */
		if($modal.height() > $(window).height() || esign.cache.IS_MOBILE) {
			
			if(!$modal.hasClass('md-cover')) {
				
				var $close = $modal.find('.md-close');
							
				$modal
					.addClass('md-cover')
					.find('.md-content')
					.wrapInner('<div class="md-center"><div class="container small"></div></div>')
					.after($close);
					
				$close.wrap('<div class="md-topbar"></div>');
				
			}
			
		}
		
		if($modal) {
			// remove current modal
			$('.md-show').removeClass('md-show');
			esign.cache.$html.removeClass('noscroll');
			
			// show modal
			$modal.toggleClass('md-show');
			if($modal.hasClass('md-cover')) {
				esign.cache.$html.addClass('noscroll');
			}
			
			location.hash = '#open-' + $modal.attr('id');
		}
		
	});
	
	// open modal from hash
	var hash = window.location.hash;
	if(hash.indexOf('#open-') >= 0) {
		var itemId = hash.replace('open-',''),
			$modal = $(itemId);
		
		if($modal.length) {
			$modal.addClass('md-show');
			if($modal.hasClass('md-cover')) {
				esign.cache.$html.addClass('noscroll');
			}
		}
	} 
	
	// close modal
	$('.md-close-trigger, .md-overlay').click(function(e) {
		$('.md-show').removeClass('md-show');
		esign.cache.$html.removeClass('noscroll');
	});
	
	// handle keyboard events
	$(document).on('keydown', function(e) {
		var tag = e.target.tagName.toLowerCase();

		if (tag != 'input' && tag != 'textarea') {
			// hide modal on escape
			if(e.which === 27 && $('.md-show').length) {
				$('.md-show').removeClass('md-show');
				esign.cache.$html.removeClass('noscroll');
			}
			
			if(e.which === 77) {
				$('.main-modal-trigger').trigger('click');
			}

		}
	});
	
};


/* HTML */
/*
<!-- md-modal (fixed width height) /  -->
<div id="modal1" class="md-modal">
	<div class="md-content">
		<h2>Centered</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci elit, eu pulvinar lacus cursus eget. Nulla mattis nisi ac vestibulum mattis. In sed dolor vel mauris auctor venenatis. Nunc pulvinar, metus sit amet tristique luctus, justo turpis euismod velit, in accumsan nisi augue et nisi. Ut efficitur sollicitudin molestie. Nam eget nisi et sem pharetra blandit. Duis cursus lorem at urna imperdiet iaculis. Duis lectus purus, suscipit ut venenatis ut, tincidunt vitae augue. Proin pharetra sem a gravida malesuada. Suspendisse id nisi ut tortor aliquet faucibus. In id metus sed tellus pellentesque pretium.</p>
		<p>Etiam semper aliquam pellentesque. Vestibulum efficitur id dui nec aliquam.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci elit, eu pulvinar lacus cursus eget. Nulla mattis nisi ac vestibulum mattis. In sed dolor vel mauris auctor venenatis. Nunc pulvinar, metus sit amet tristique luctus, justo turpis euismod velit, in accumsan nisi augue et nisi. Ut efficitur sollicitudin molestie. Nam eget nisi et sem pharetra blandit. Duis cursus lorem at urna imperdiet iaculis. Duis lectus purus, suscipit ut venenatis ut, tincidunt vitae augue. Proin pharetra sem a gravida malesuada. Suspendisse id nisi ut tortor aliquet faucibus. In id metus sed tellus pellentesque pretium.</p>
		<button class="md-close"><i class="icon-close"></i></button>			
	</div>
</div>

<!-- md-modal md-cover (window width height) -->
<div id="modal2" class="md-modal md-cover">
	<div class="md-content">
		<h2>Centered</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci elit, eu pulvinar lacus cursus eget. Nulla mattis nisi ac vestibulum mattis. In sed dolor vel mauris auctor venenatis. Nunc pulvinar, metus sit amet tristique luctus, justo turpis euismod velit, in accumsan nisi augue et nisi. Ut efficitur sollicitudin molestie. Nam eget nisi et sem pharetra blandit. Duis cursus lorem at urna imperdiet iaculis. Duis lectus purus, suscipit ut venenatis ut, tincidunt vitae augue. Proin pharetra sem a gravida malesuada. Suspendisse id nisi ut tortor aliquet faucibus. In id metus sed tellus pellentesque pretium.</p>
		<p>Etiam semper aliquam pellentesque. Vestibulum efficitur id dui nec aliquam.</p>
		<p>Fusce imperdiet varius augue. Cras leo nulla, venenatis nec libero eget, tincidunt blandit orci. Cras hendrerit leo at enim lacinia commodo. Aliquam ut augue viverra, interdum lacus a, placerat erat. Nunc et diam nibh. Quisque iaculis augue sit amet lectus tincidunt, non aliquet turpis molestie. Vivamus blandit libero nec purus vulputate, non eleifend nisl semper. Nullam nec hendrerit velit. Vivamus libero nulla, tempus quis dolor non, aliquet faucibus felis. Donec vitae turpis dui. Aliquam nec elit ac dui lacinia feugiat pulvinar eget lectus. Integer efficitur erat vitae orci varius, ut luctus risus maximus. Aenean id cursus risus, et scelerisque massa. Suspendisse non facilisis lorem. Etiam ultrices mauris gravida, vestibulum nulla molestie, bibendum justo. Quisque ut elit sit amet velit malesuada dapibus varius quis leo.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci elit, eu pulvinar lacus cursus eget. Nulla mattis nisi ac vestibulum mattis. In sed dolor vel mauris auctor venenatis. Nunc pulvinar, metus sit amet tristique luctus, justo turpis euismod velit, in accumsan nisi augue et nisi. Ut efficitur sollicitudin molestie. Nam eget nisi et sem pharetra blandit. Duis cursus lorem at urna imperdiet iaculis. Duis lectus purus, suscipit ut venenatis ut, tincidunt vitae augue. Proin pharetra sem a gravida malesuada. Suspendisse id nisi ut tortor aliquet faucibus. In id metus sed tellus pellentesque pretium.</p>
		<p>Etiam semper aliquam pellentesque. Vestibulum efficitur id dui nec aliquam.</p>
		<p>Fusce imperdiet varius augue. Cras leo nulla, venenatis nec libero eget, tincidunt blandit orci. Cras hendrerit leo at enim lacinia commodo. Aliquam ut augue viverra, interdum lacus a, placerat erat. Nunc et diam nibh. Quisque iaculis augue sit amet lectus tincidunt, non aliquet turpis molestie. Vivamus blandit libero nec purus vulputate, non eleifend nisl semper. Nullam nec hendrerit velit. Vivamus libero nulla, tempus quis dolor non, aliquet faucibus felis. Donec vitae turpis dui. Aliquam nec elit ac dui lacinia feugiat pulvinar eget lectus. Integer efficitur erat vitae orci varius, ut luctus risus maximus. Aenean id cursus risus, et scelerisque massa. Suspendisse non facilisis lorem. Etiam ultrices mauris gravida, vestibulum nulla molestie, bibendum justo. Quisque ut elit sit amet velit malesuada dapibus varius quis leo.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum orci elit, eu pulvinar lacus cursus eget. Nulla mattis nisi ac vestibulum mattis. In sed dolor vel mauris auctor venenatis. Nunc pulvinar, metus sit amet tristique luctus, justo turpis euismod velit, in accumsan nisi augue et nisi. Ut efficitur sollicitudin molestie. Nam eget nisi et sem pharetra blandit. Duis cursus lorem at urna imperdiet iaculis. Duis lectus purus, suscipit ut venenatis ut, tincidunt vitae augue. Proin pharetra sem a gravida malesuada. Suspendisse id nisi ut tortor aliquet faucibus. In id metus sed tellus pellentesque pretium.</p>
		<p>Etiam semper aliquam pellentesque. Vestibulum efficitur id dui nec aliquam.</p>
		<p>Fusce imperdiet varius augue. Cras leo nulla, venenatis nec libero eget, tincidunt blandit orci. Cras hendrerit leo at enim lacinia commodo. Aliquam ut augue viverra, interdum lacus a, placerat erat. Nunc et diam nibh. Quisque iaculis augue sit amet lectus tincidunt, non aliquet turpis molestie. Vivamus blandit libero nec purus vulputate, non eleifend nisl semper. Nullam nec hendrerit velit. Vivamus libero nulla, tempus quis dolor non, aliquet faucibus felis. Donec vitae turpis dui. Aliquam nec elit ac dui lacinia feugiat pulvinar eget lectus. Integer efficitur erat vitae orci varius, ut luctus risus maximus. Aenean id cursus risus, et scelerisque massa. Suspendisse non facilisis lorem. Etiam ultrices mauris gravida, vestibulum nulla molestie, bibendum justo. Quisque ut elit sit amet velit malesuada dapibus varius quis leo.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		
	</div>
	<button class="md-close"><i class="icon-close"></i></button>
</div>

<div class="md-overlay"></div>
*/

/* CSS */
/* modals */
/*
.md-modal {
	position: fixed; top: 50%; left: 50%; width: 50%; z-index: 2000;
    min-width: 320px; height: auto; visibility: hidden; .backface-visibility; 
	.transform(translateX(-50%) translateY(-50%)); pointer-events: none;
	text-align: left; .fs(18);
	
	@media @mobile {
		display: none;
	}
	
	@media @desktop {
		width: 940px;
	}
}

.md-cover {
	top: 0; left: 0; width: 100%;
	.transform(none);
	
	.md-content {
		height: 100%; height: 100vh; overflow-y: scroll; 
		.transform(scale(0.9)); .backface-visibility;
	}
	
	.md-close {
		position: fixed; z-index: 1000; top: -5px; right: 10px;
		.transform(translateY(20%) scale(0.8)); opacity: 0;
	}
	
	&.md-show {
		.md-close {
			opacity: 1; .transform(translateY(0));
		}
	}
	
	@media @tablet {
		.md-close {
			top: 4px; right: 28px;
		}
	}
}

.md-content.md-content {
	.clearfix; position: relative; margin: 0 auto; padding: 20px 25px;
	background: @accent; .transform(translateY(20%)); opacity: 0; .transition;
	color: #fff;
	
	h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
		color: #fff;	
	}
	
	a {
		color: #fff;
		&:hover, &:focus { color: #efefef; }
	}
	
	.md-close, .md-close-holder {
		position: absolute; top: 4px; right: 12px;
	}
	
	@media @tablet {
		 padding: 40px 45px;
	}
}

.md-show {
	visibility: visible; pointer-events: auto;
	
	.md-content {  
		opacity: 1; .transform(translateY(0));	
	}
	
	~ .md-overlay {
		.opacity(100); visibility: visible;
	}
	
	@media @mobile {
		display: block;
	}
}

// add close icon
.md-close {
	width: 35px; height: 35px; line-height: 35px; background: @accentHover;
	text-align: center; padding: 0; .fs(20);
}

.md-overlay {
	position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 1000;
    visibility: hidden; .opacity(0); background: rgba(0,0,0,0.2); .transition;
}

.noscroll { overflow: hidden; }*/