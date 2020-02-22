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
        })
      })
  ).isRequired,
  apartmentTitlesClickHandler: PropTypes.func,
  onCardMouseOver: PropTypes.func,
};

export default PlaceList;
