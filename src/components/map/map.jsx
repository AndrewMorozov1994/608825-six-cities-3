import React from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";

const CITY = [52.38333, 4.9];
const ZOOM = 12;
const ICON_SIZE = [30, 30];
const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: ICON_SIZE,
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._map = React.createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const map = leaflet.map(this._map.current, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(CITY, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {
      leaflet
        .marker(offer.coordinates, {ICON})
        .addTo(map);
    });
  }

  render() {
    return (
      <section id="map" ref={this._map} className="cities__map map"/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        photos: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
        description: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        guests: PropTypes.number.isRequired,
        features: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
        owner: PropTypes.shape({
          name: PropTypes.string.isRequired,
          super: PropTypes.bool.isRequired,
          src: PropTypes.string.isRequired
        }),
        coordinates: PropTypes.arrayOf(
            PropTypes.number
        ).isRequired,
      })
  ).isRequired,
};

export default Map;
