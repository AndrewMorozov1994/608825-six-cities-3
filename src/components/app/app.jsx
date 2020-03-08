import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeId: -1,
    };

    this._apartmentTitlesClickHandler = this._apartmentTitlesClickHandler.bind(this);
  }

  _apartmentTitlesClickHandler(id) {
    this.setState({
      activeId: id
    });
  }

  _renderApp() {
    const {offers} = this.props;
    const {activeId} = this.state;

    if (activeId >= 0) {
      return (
        <Property
          card={offers[activeId]}/>
      );
    }

    return (
      <Main
        apartmentTitlesClickHandler = {this._apartmentTitlesClickHandler}
        onCardMouseOver = {() => {}}
      />
    );
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/offer">
            <Property
              card={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
});

App.propTypes = {
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
};

export {App};
export default connect(mapStateToProps)(App);
