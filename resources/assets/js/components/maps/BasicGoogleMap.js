// Docs: https://docs.esign.eu/books/development/page/front-end-template#bkmrk-basicgooglemap

import googleMapsStyles from '../../constants/googleMapsStyles';

const defaultMapData = {
  holderId: 'map',
  title: 'Esign',
  lat: 51.0325538,
  long: 3.7333816,
  externUrl: 'https://www.google.be/maps/place/Esign+-+Web+%26+Graphics/@51.0325538,3.7333816,19z/data=!3m1!4b1!4m5!3m4!1s0x47c373970c763623:0xde317546f86febc9!8m2!3d51.0325538!4d3.7339288',
};

export default class BasicGoogleMap {
  init(mapSettings = null) {
    const google = window.google || {};
    this.googleMaps = google.maps;
    this.baseUrl = window.baseUrl || '';

    // override default map data if param is set
    const mapData = mapSettings || defaultMapData;
    const holder = document.getElementById(mapData.holderId);

    if (holder) {
      const map = this.addMap(holder, mapData.lat, mapData.long);
      this.addMarker(map, mapData.lat, mapData.long, mapData.title, mapData.externUrl);
    }
  }

  addMap(holder, latitude, longitude) {
    const zoom = 15;
    const disable = true;
    const scroll = false;
    const styledMap = new this.googleMaps.StyledMapType(
      googleMapsStyles,
      { name: 'Styled Map' },
    );
    const mapCenter = new this.googleMaps.LatLng(latitude, longitude);
    const mapOptions = {
      zoom,
      panControl: true,
      zoomControl: disable,
      scaleControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      minZoom: 2,
      scrollwheel: scroll,
      center: mapCenter,
      mapTypeId: this.googleMaps.MapTypeId.ROADMAP,
    };
    const map = new this.googleMaps.Map(holder, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    this.googleMaps.event.addDomListener(window, 'resize', () => {
      map.setCenter(mapCenter);
    });

    return map;
  }

  addMarker(map, latitude, longitude, title, externUrl) {
    const myLatlng = new this.googleMaps.LatLng(latitude, longitude);

    const markerIcon = {
      url: window.markerImg,
      size: new this.googleMaps.Size(100, 128),
      origin: new this.googleMaps.Point(0, 0),
      anchor: new this.googleMaps.Point(25, 64),
      scaledSize: new this.googleMaps.Size(50, 64),
    };

    const marker = new this.googleMaps.Marker({
      position: myLatlng,
      map,
      icon: markerIcon,
    });

    this.googleMaps.event.addListener(marker, 'click', () => {
      window.open(externUrl, '_blank');
    });

    return marker;
  }
}
