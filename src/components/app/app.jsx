import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offersCount, offers, apartmentTitlesClickHandler, onCardMouseOver} = props;

  return (
    <Main
      offersCount = {offersCount}
      offers = {offers}
      apartmentTitlesClickHandler = {apartmentTitlesClickHandler}
      onCardMouseOver = {onCardMouseOver}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string.isRequired
      })
  ).isRequired,
  apartmentTitlesClickHandler: PropTypes.func,
  onCardMouseOver: PropTypes.func,
};

export default App;
