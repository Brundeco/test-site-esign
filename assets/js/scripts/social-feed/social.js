/*
 * Esign Social Feed
 * 
 * API:      
 *   change social key
 * TYPES:    
 *   enable ajax calls
 * USE_GRID: 
 *   true requires GRID
 *   false requires feed ajax call 
 * GRID:     
 *   set order of types
 * GRID_REPEAT: 
 *   how many times
 * GRID_REPEAT_EXCLUDE: 
 *   exclude types from repeat
 * 
 */

window.social = window.social || {};

social.cacheSelectors = function () {
	
	social.data = {
		feed: null,
		instagram: null,
		twitter: null,
		facebook: null,
		pinterest: null
	};
	
	social.cache = {
		// const 
		API: 'https://apps.esign.eu/social/23/',
		TYPES: {
			feed: false,
			instagram: true,
			twitter: true,
			facebook: true,
			pinterest: false
		},
		USE_GRID: true,
		GRID: [
			'instagram',
			'facebook',
			'newsletter',
			'twitter',
			'instagram',
			'twitter'
		],
		GRID_REPEAT: 2,
		GRID_REPEAT_EXCLUDE: [
			'newsletter'
		],
		
		// vars
		typesActive: 0,
		typesCalled: 0,
		
		// elements
		$socialGridTemplates: $('#social-grid-templates')
	};
	
	social.cache.$feedTemplate = social.cache.$socialGridTemplates.find('.feed-template');
	social.cache.$instagramTemplate = social.cache.$socialGridTemplates.find('.instagram-template');
	social.cache.$twitterTemplate = social.cache.$socialGridTemplates.find('.twitter-template');
	social.cache.$facebookTemplate = social.cache.$socialGridTemplates.find('.facebook-template');		
	social.cache.$pinterestTemplate = social.cache.$socialGridTemplates.find('.pinterest-template');
	social.cache.$newsletterTemplate = social.cache.$socialGridTemplates.find('.newsletter-template');
	
};

social.init = function () {
	
	// check if social grid exists
	var $socialGridHolder = $('#social-grid-holder');
	if ($socialGridHolder.length) {
				
		social.cacheSelectors();
		social.cache.$holder = $socialGridHolder;		
		
		// api calls
		social.getData();
		
	}
	
};

social.showItems = function () {
	
	if(!social.cache.USE_GRID) {
		
		if(social.data.feed) {
			for(var i=0, j=social.data.feed.length; i < j; i++){
				social.addItem(social.data.feed[i]);
			};
		}
		
	} else {

		for (var repeat=0; repeat < social.cache.GRID_REPEAT; repeat++) {
			
			for(var tI = 0, tJ = social.cache.GRID.length; tI < tJ; tI++) {
				
				var type = social.cache.GRID[tI],
					show = true;
					
				if (repeat > 0 && social.cache.GRID_REPEAT_EXCLUDE.indexOf(type) >= 0) {
					show = false;
				}
							
				if (show) {
					social.showGridItem(type);	
				}
				
			};
		};
		
	}
	
};

// show item from template
social.showGridItem = function (type) {
		
	if (type == 'newsletter') {
		
		social.cache.$holder.append(social.cache.$newsletterTemplate);
		
	} else {
		
		var socialData = social.data[type];
		if(socialData && socialData.length > 0) {
			
			var data = socialData.shift();
			social.addItem(data);
			
		}
		
	}
	
};

// add item to holder
social.addItem = function (data) {
		
	var $template = social.cache.$feedTemplate.clone();
	
	// select template
	switch (data.type) {
		case 'twitter':
			$item = social.cache.$twitterTemplate.clone();
			break;
		case 'instagram':
			$item = social.cache.$instagramTemplate.clone();
			break;
		case 'facebook':
			$item = social.cache.$facebookTemplate.clone();
			break;
		case 'pinterest':
			$item = social.cache.$pinterestTemplate.clone();
			break;
	}
	
	if($item.length < 1) {
		$item = social.cache.$feedTemplate.clone();
	}	
	
	// text
	var $text = $item.find('.text');
	if ($text.length) {
		if (data.text) {
			$text.html(data.text);
		} else {
			$text.remove();
		}
	}
	
	// photo: can be img or background
	var $photo = $item.find('.photo');
	if ($photo.length) {
		if (data.photo) {
			
			if ($photo.prop('tagName').toLowerCase() == 'img') {
				$photo.attr('src', data.photo);	
			} else {
				$photo.css('background-image', 'url(/' + data.photo + ')');
			}
			
		} else {
			$photo.remove();
			$item.addClass('no-photo');
		}
	}
	
	// likes
	var $likes = $item.find('.likes');
	if ($likes.length) {
		if (data.likes) {
			$likes.text(data.likes);
		} else {
			$likes.remove();
		}
	}
	
	// url
	var $url = $item.find('.url');
	if ($url.length && data.url) {
		$url.attr('href', data.url);
	}
	
	social.cache.$holder.append($item);
	
};

social.getData = function () {
	
	social.cache.typesCalled = 0;
	social.cache.typesActive = 0;
	
	for (var type in social.cache.TYPES) {
		// loop calls
		if (social.cache.TYPES[type] && social.cache.TYPES[type] == true) {
			social.cache.typesActive = social.cache.typesActive + 1;
			social.call(type);
		}
	}
		
};

social.call = function (type) {
		
	$.ajax({
		url: social.cache.API + type, 
		data: {},
		dataType: 'jsonp',
		success: function(data) {  
			social.data[type] = data;
		},
		complete: function(data) {
			
			social.cache.typesCalled = social.cache.typesCalled + 1;			
			if(social.cache.typesCalled == social.cache.typesActive) {
				social.showItems();
			}
			
		}
	});
  
};

$(social.init);