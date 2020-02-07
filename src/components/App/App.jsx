import React from "react";
import PropTypes from "prop-types";
import Main from "../Main/main.jsx";

const App = (props) => {
  const {offersCount, apartments} = props;

  return (
    <Main
      offersCount = {offersCount}
      apartments = {apartments}
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
};

export default App;
