var $nav, currentPage, UP = 'up', DOWN = 'down';

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
	
	var $pages = $('section[data-page]');
		
	$('.page-link').click(function(e) {
		e.preventDefault();
		var to = $(e.currentTarget).attr('href');
		$nav.slideUp('fast');
		setPage(to, true, true);
	});
	
	/*$pages.waypoint(function(direction) {		
		waypointPage(direction, $(this));
	},{ offset: 50 });
	
	$pages.last().waypoint(function(direction) {
		waypointPage(direction, $(this));
	},{ offset: 200 });*/
	
	
	/* PAGES */
	
	/* home */
	var $homeSlideshowTxt = $('#home h1 span'),
		$homePager = $('#home-pager span');
	$('#home-slideshow').on( 'cycle-before', function( event, opts, outSlide, inSlide) {
		var index = $(inSlide).index() - 1;
	    $homeSlideshowTxt.removeClass('active');
	    $($homeSlideshowTxt.get(index)).addClass('active');
	    $homePager.removeClass('cycle-pager-active');
		$($homePager.get(index)).addClass('cycle-pager-active');
	});
	
	/* products */
	var $productsNextText = $('#product-next span'),
		$productsPrevText = $('#product-prev span');
	$('#products-carousel').on( 'cycle-after', function( event, opts, outSlide, inSlide) {
		var prev = $(inSlide).data("prev"),
			next = $(inSlide).data("next");
		$productsPrevText.text(prev);
		$productsNextText.text(next);
		
		/*var page = $(inSlide).closest('section').data('page'),
			slug = $(inSlide).data('slug');
		History.pushState({page:page}, slug, slug);*/
	});
	
	$('.nav-tabs a').click(function(e) {
		e.preventDefault();
		var $navtabs = $(this).closest('.nav-tabs'),
			$this = $(this);
		
		$navtabs.find('li').removeClass('active');
		$navtabs.next().find('.tab-pane').slideUp('fast');
		
		$this.parent().addClass('active');		
		$($this.attr('href')).slideDown('fast');
	});
	
	/* dealers */
	initDealers();
	
	/* contact */
	if(!Modernizr.touch) {
		$('.validate').validationEngine();
	} else {
		$('.validate').validationEngine({scroll:false});
	}
	
	/* ROUTING */
	History.Adapter.bind(window, 'statechange', function() {
		var state = History.getState(),
			page = state.data.page;
		
		if(page !== currentPage) {
			setPage(page, true, false);	
		}
	});

});

$(window).bind('enterBreakpoint767',function() {
	$nav.css('display', 'block');
});

$(window).bind('exitBreakpoint767',function() {
	$nav.css('display', 'none');
});

function setPage(slug, scroll, history) {
	
	if(slug !== undefined) {
		
		var parts = slug.split('/'),
			page = parts[0],
			$page = $('*[data-page="'+page+'"]').first();
		
		if($page && page !== currentPage) {
			console.log("set slug: "+slug);
			
			currentPage = page;
			
			if(history) {
				History.pushState({page:page}, slug, slug);
			}
			
			$nav.find('li').removeClass('active');
			$nav.find('[href="'+ slug+'"]').parent().addClass('active');
			
			if(scroll) {
				$.scrollTo.window().queue([]).stop();
				$.scrollTo($page, 1200, {'axis':'y'});
			}
		}
		
	}	
	
}

/*function waypointPage(direction, $this) {
	var page = $this.data('page'),
		prevPage = $this.prev().data('page');
	if(direction === DOWN && page && page !== undefined) {
		setPage(page, false, false);
	} else if(prevPage && prevPage !== undefined) {
		setPage(prevPage, false, false);
	}
}*/

function initDealers() {
	var map = addGoogleMaps("map", 50, -20);

	for (var i=0; i < markers.length; i++) {
		var marker = markers[i], address = null;
		addGoogleMapsMarker(marker.latitude, marker.longitude, marker.address, i, map);
	};
}

function addGoogleMaps(container, latitude, longitude) {
	
	var zoom = 1, 
  		scroll = true,
  		styledMap = new google.maps.StyledMapType(
  			[
			    {
			        "featureType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 100
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			        	{
			                "visibility": "on"
			            },
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 80
			            }
			        ]
			    }
			], 
			{name: "Styled Map"}
		), 
		mapCenter = new google.maps.LatLng(latitude, longitude),
		mapOptions = {
			zoom: zoom,
			panControl: false,
			zoomControl: false,
			scaleControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			minZoom : 2,
			scrollwheel: scroll,
			center: mapCenter,
			backgroundColor: '#FFFFFF',
			mapTypeId: google.maps.MapTypeId.ROADMAP
		},
		map = new google.maps.Map(document.getElementById(container), mapOptions);
		
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	
	google.maps.event.addDomListener(window, 'resize', function() {
	    map.setCenter(mapCenter);
	});

	return map;
	
}

function addGoogleMapsMarker(latitude, longitude, address, index, map) {
	var myLatlng = new google.maps.LatLng(latitude, longitude),
		marker_image = new google.maps.MarkerImage(base_url + "assets/images/marker.png",
			new google.maps.Size(29,30),
			new google.maps.Point(0,0),
			new google.maps.Point(11, 23)),
		marker = new google.maps.Marker({
	    	position: myLatlng,
	    	map: map,
	    	icon: marker_image
	    });

    return marker;
}
