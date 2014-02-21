$(function() {

    var map = addContactGoogleMaps("map", 51.016635, 3.734258);
   		addContactGoogleMapsMarker(map, 51.016635, 3.734258, "GooseBumps", "https://maps.google.be/maps?daddr=51.016405,3.736007&hl=nl&ll=51.016405,3.736007&spn=0.00773,0.016426&sll=51.007191,3.712097&sspn=0.00773,0.016426&mra=ls&t=m&z=17&iwloc=ddw1");

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
		marker_image = new google.maps.MarkerImage(url + "assets/images/marker.png",
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