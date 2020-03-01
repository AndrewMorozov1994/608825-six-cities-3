import React from 'react';
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

const PlaceList = (props) => {
  const {offers, apartmentTitlesClickHandler, onCardMouseOver, className} = props;

  return (
    <div className={`${className} places__list`}>
      {offers.map((offer) => (
        <PlaceCard
          offer = {offer}
          key = {offer.id}
          apartmentTitlesClickHandler = {apartmentTitlesClickHandler}
          onCardMouseOver = {onCardMouseOver}
        />))}
    </div>
  );
};

PlaceList.propTypes = {
  offers: PropTypes.array.isRequired,
  apartmentTitlesClickHandler: PropTypes.func,
  onCardMouseOver: PropTypes.func,
  className: PropTypes.string,
};

export default PlaceList;
