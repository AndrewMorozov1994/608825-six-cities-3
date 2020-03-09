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
    const _map = this._map.current;

    if (_map) {
      const map = leaflet.map(_map, {
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

      this.setState({map, layerGroup: leaflet.layerGroup().addTo(map)});
    }
  }

  componentDidUpdate() {
    const {layerGroup} = this.state;
    const {offers} = this.props;

    layerGroup.clearLayers();
    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {ICON})
        .addTo(layerGroup);
    });
  }

  render() {
    return (
      <section id ="map" ref={this._map} className={`${this.props.className} map`}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default Map;
