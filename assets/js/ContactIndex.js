/**
 * Created by bartdecorte on 23/03/2017.
 */

function ContactIndex() {

	this.mapStyles = undefined;
	this.maps = undefined;
	this.markerIcons = undefined;
	this.markers = undefined;

	this.params = {
		markerIcons: undefined,
		maps: undefined,
		mapStyles: undefined
	};

	this.defaults = {
		markerIcons: {
			default: {
				url: base_url + 'assets/images/marker.png',
				size: {w: 120, h: 180},
				origin: {x: 0, y: 0},
				anchor: {x: 30, y: 90},
				scaledSize: {w: 60, h: 90}
			}
		},
		maps: {
			map: {
				lat: 51.0071914,
				lng: 3.7120968,
				mapStyle: 'styledMap',
				options: {
					zoom: 12
				},
				markers: {
					default: {
						lat: 51.0071914,
						lng: 3.7120968,
						icon: 'default',
						url: 'https://www.esign.eu'
					}
				}
			}
		},
		mapStyles: {
			styledMap: {
				style: [
					{
						stylers: [
							{ hue: "#aaa" },
							{ saturation: -200 }
						]
					},{
						featureType: "road",
						elementType: "geometry",
						stylers: [
							{ lightness: 150 },
							{ visibility: "simplified" }
						]
					},{
						featureType: "poi.business",
						stylers: [
							{"visibility":"off"}
						]
					}
				]
			}
		}
	};

	this.defaultMapOptions = {
		zoom: 15,
		panControl: true,
		zoomControl: true,
		scaleControl: true,
		mapTypeControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		minZoom : 2,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// Inheritance
	_Recaptcha.call(this, arguments);
	_HasParams.call(this, arguments);

	this.construct = function(params) {
		var scope = this;

		scope.mapStyles = {};
		scope.markerIcons = {};
		scope.maps = {};
		scope.markers = {};

		scope.bindListeners();
		scope.clientValidation();
		scope.initializeMapStyles();
		scope.initializeMapMarkerIcons();
		scope.initializeMaps();
	};

	this.bindListeners = function() {
		var scope = this;
		var $body = $('body');

		// example: listener bound on body for elts a.example
		//$body.on('click', 'a.example', function(ev) { return scope.listeners.exampleClick(scope, ev); });
	};

	this.listeners = this.listeners || {};
	this.listeners.exampleClick = function(scope, ev) {
		ev.preventDefault();
		var $elt = $(ev.target).get(0).tagName == 'A' ? $(ev.target) : $(ev.target).parents('a').first();

		return false;
	};

	this.clientValidation = function() {
		var scope = this;
		if(!Modernizr.touch) {
			$('.validate').validationEngine();
		} else {
			$('.validate').validationEngine({scroll:false});
		}
	};

	this.initializeMapMarkerIcons = function() {
		var scope = this;

		var markerIconData;
		for (var key in scope.params.markerIcons) {
			if (scope.params.markerIcons.hasOwnProperty(key)) {
				markerIconData = scope.params.markerIcons[key];
				scope.markerIcons[key] = {
					url: markerIconData.url,
					size: new google.maps.Size(markerIconData.size.w, markerIconData.size.h),
					origin: new google.maps.Point(markerIconData.origin.x, markerIconData.origin.y),
					anchor: new google.maps.Point(markerIconData.anchor.x, markerIconData.anchor.y),
					scaledSize: new google.maps.Size(markerIconData.scaledSize.w, markerIconData.scaledSize.h)
				};
			}
		}
	};

	this.initializeMapStyles = function() {
		var scope = this;

		var styleData;
		for (var key in scope.params.mapStyles) {
			if (scope.params.mapStyles.hasOwnProperty(key)) {
				styleData = scope.params.mapStyles[key];
				scope.mapStyles[key] = new google.maps.StyledMapType(
					styleData.style,
					{name: key}
				)
			}
		}
	};

	this.initializeMaps = function() {
		var scope = this;

		var mapData, mapOptions, markerKey, markerData;
		for (var key in scope.params.maps) {
			if (scope.params.maps.hasOwnProperty(key)) {
				mapData = scope.params.maps[key];
				mapOptions = $.extend(
					true, {},
					scope.defaultMapOptions,
					mapData.hasOwnProperty('options') ? mapData.options : {},
					{ center: new google.maps.LatLng(mapData.lat, mapData.lng) }
				);

				scope.maps[key] = new google.maps.Map($('#' + key).get(0), mapOptions);

				if (mapData.hasOwnProperty('mapStyle') && scope.mapStyles.hasOwnProperty(mapData.mapStyle)) {
					scope.maps[key].mapTypes.set('map_style', scope.mapStyles[mapData.mapStyle]);
					scope.maps[key].setMapTypeId('map_style');
				}

				if (mapData.hasOwnProperty('markers')) {
					for (markerKey in mapData.markers) {
						if (mapData.markers.hasOwnProperty(markerKey)) {
							markerData = mapData.markers[markerKey];
							scope.initializeMapMarker(key, markerData.lat, markerData.lng, markerData.icon, markerData.url);
						}
					}
				}
			}
		}
	};

	this.initializeMapMarker = function(map, lat, lng, icon, url) {
		var scope = this;

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: scope.maps[map],
			icon: scope.markerIcons[icon]
		});

		if (typeof url !== typeof undefined) {
			google.maps.event.addListener(marker, "click", function () {
				window.open(url, '_blank');
			});
		}
	};

	// Use to override default
	this.recaptchaResponse = function() {
		$('form.contact-form').submit();
	};

	this.construct(arguments[0]);
}