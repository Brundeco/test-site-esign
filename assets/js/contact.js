$(function() {
	
	if(!Modernizr.touch) {
		$('.validate').validationEngine();
	} else {
		$('.validate').validationEngine({scroll:false});
	}
	
    var map = addContactGoogleMaps("map", 51.0071914,3.7120968);
   		addContactGoogleMapsMarker(map, 51.0071914,3.7120968, "Template", "https://www.google.com/maps/place/Technologiepark-Zwijnaarde+1/@51.0071914,3.7120968,17z/data=!3m1!4b1!4m2!3m1!1s0x47c373970d0273e1:0x75c897695400ec00");

});

function addContactGoogleMaps(container, latitude, longitude) {

  	var zoom = 15, 
  		disable = true, 
  		scroll = false,
  		styledMap = new google.maps.StyledMapType(
  			[
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
					featureType: "poi",
					stylers: [
						{"visibility":"off"}
					]
				}
			], 
			{name: "Styled Map"}
		), 
		mapCenter = new google.maps.LatLng(latitude, longitude),
		mapOptions = {
			zoom: zoom,
			panControl: true,
			zoomControl: disable,
			scaleControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			minZoom : 2,
			scrollwheel: scroll,
			center: mapCenter,
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

function addContactGoogleMapsMarker(map, latitude, longitude, title, extern_url) {
	var myLatlng = new google.maps.LatLng(latitude, longitude),
		marker_image = new google.maps.MarkerImage(base_url + "assets/images/marker.png",
			new google.maps.Size(51,68),
			new google.maps.Point(0,0),
			new google.maps.Point(22, 60)),
		marker = new google.maps.Marker({
	    	position: myLatlng,
	    	map: map,
	    	icon: marker_image
	    });

    google.maps.event.addListener(marker, "click", function() {
	    window.location = extern_url;
	});

    return marker;
}