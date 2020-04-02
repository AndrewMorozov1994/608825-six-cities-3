import offers from "./mocks/offers";
import {extend} from './utils.js';

const initialState = {
  city: offers[0].city,
  offers,
  activeFilter: {label: `Popular`, value: `ALL`},
  activeOffer: null,
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_FILTER: `SET_FILTER`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
};

const ActionCreator = {
  setCity: (payload) => ({
    type: ActionType.SET_CITY,
    payload,
  }),

  setOffers: (payload) => ({
    type: ActionType.SET_OFFERS,
    payload,
  }),

  setFilter: (payload) => ({
    type: ActionType.SET_FILTER,
    payload,
  }),

  setActiveOffer: (payload) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return extend(
          state,
          {city: action.payload}
      );
    case ActionType.SET_OFFERS:
      return extend(
          state,
          {offers: action.payload}
      );
    case ActionType.SET_FILTER:
      return extend(
          state,
          {activeFilter: action.payload}
      );
    case ActionType.SET_ACTIVE_OFFER:
      return extend(
          state,
          {activeOffer: action.payload}
      );
    default: return state;
  }
};

export {ActionCreator, ActionType, reducer};
