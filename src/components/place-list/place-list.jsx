import React from 'react';
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

const PlaceList = (props) => {
  const {offers, apartmentTitlesClickHandler, onCardMouseOver} = props;

  return (
    offers.map((offer) => (
      <PlaceCard
        offer = {offer}
        key = {offer.id}
        apartmentTitlesClickHandler = {apartmentTitlesClickHandler}
        onCardMouseOver = {onCardMouseOver}
      />))
  );
};

PlaceList.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired
  }),
  apartmentTitlesClickHandler: PropTypes.func,
  onCardMouseOver: PropTypes.func,
};

export default PlaceList;
