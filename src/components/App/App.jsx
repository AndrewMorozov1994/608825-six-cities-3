import React from "react";
import PropTypes from "prop-types";
import Main from "../Main/Main.jsx";

const App = (props) => {
  const {offersCount, apartments, apartmentTitlesClickHandler} = props;

  return (
    <Main
      offersCount = {offersCount}
      apartments = {apartments}
      apartmentTitlesClickHandler = {apartmentTitlesClickHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  apartments: PropTypes.arrayOf(
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
};

export default App;
