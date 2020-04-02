import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import PlaceList from "../place-list/place-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withActiveFilter from "../../hocs/with-active-filter.jsx";
import {getCitiesListSelector, getCitySelector, getSortedOffersInCitySelector, getActiveFilter, getActiveOfferSelector} from "../../selectors.js";

const PlacesSortingWrapped = withActiveFilter(PlacesSorting);

const Main = (props) => {
  const {offers, city, citiesList, onCityClick, apartmentTitlesClickHandler, onCardMouseOver, activeFilter, activeOffer, onFilterClick} = props;
  const offersCount = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${(offersCount === 0) ? ` page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          citiesList={citiesList}
          city={city}
          onCityClick={onCityClick}
        />
        <div className="cities">
          {(offersCount >= 2) &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in Amsterdam</b>
                <PlacesSortingWrapped onFilterClick={onFilterClick} activeFilter={activeFilter}/>

                <PlaceList
                  offers = {offers}
                  apartmentTitlesClickHandler = {apartmentTitlesClickHandler}
                  onCardMouseOver = {onCardMouseOver}
                  className = {`cities__places-list tabs__content`}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={offers}
                  className={`cities__map`}
                  activeMarker={(activeOffer) ? activeOffer.coordinates : null}
                />
              </div>
            </div>
          }
          {(offersCount < 2) &&
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property availbale at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
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
        reviews: PropTypes.array.isRequired,
        nearOffers: PropTypes.array.isRequired,
      })
  ).isRequired,
  apartmentTitlesClickHandler: PropTypes.func,
  onCardMouseOver: PropTypes.func,
  city: PropTypes.string.isRequired,
  citiesList: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.object,
  activeOffer: PropTypes.array,
  onFilterClick: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   offers: state.offers.filter((offer) => (offer.city === state.city)),
//   city: state.city,
//   citiesList: [...new Set(state.offers.map((offer) => offer.city))],
// });
const mapStateToProps = (state) => {
  return {
    offers: getSortedOffersInCitySelector(state),
    city: getCitySelector(state),
    activeFilter: getActiveFilter(state),
    citiesList: getCitiesListSelector(state),
    activeOffer: getActiveOfferSelector(state)
  };
};

const mapDispatchToProps = {
  onCityClick: ActionCreator.setCity,
  onFilterClick: ActionCreator.setFilter,
  onCardMouseOver: ActionCreator.setActiveOffer
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
