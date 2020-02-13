import React from "react";
import ReactDOM from "react-dom";
import offers from "./mocks/offers.js";
import App from "./components/app/app.jsx";

const offersCount = 312;

const apartmentTitlesClickHandler = () => {};
const offerMouseOverHandler = () => {};

ReactDOM.render(
    <App
      offersCount = {offersCount}
      offers = {offers}
      apartmentTitlesClickHandler = {apartmentTitlesClickHandler}
      onCardMouseOver = {offerMouseOverHandler}
    />,
    document.getElementById(`root`)
);
