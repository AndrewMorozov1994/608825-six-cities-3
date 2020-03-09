import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import PlaceList from "../place-list/place-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";

const Main = (props) => {
  const {offers, city, citiesList, onCityClick, apartmentTitlesClickHandler, onCardMouseOver} = props;
  const selectedCityOffers = offers.filter((offer) => (offer.city === city));
  const offersCount = selectedCityOffers.length;

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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                  {/* <select className="places__sorting-type" id="places-sorting">
                    <option className="places__option" value="popular" selected="">Popular</option>
                    <option className="places__option" value="to-high">Price: low to high</option>
                    <option className="places__option" value="to-low">Price: high to low</option>
                    <option className="places__option" value="top-rated">Top rated first</option>
                  </select> */}
                </form>
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
};

const mapStateToProps = (state) => ({
  offers: state.offers.filter((offer) => (offer.city === state.city)),
  city: state.city,
  citiesList: [...new Set(state.offers.map((offer) => offer.city))],
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (evt, city) => {
    evt.preventDefault();
    dispatch(ActionCreator.setCity(city));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
