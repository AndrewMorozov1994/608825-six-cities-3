import offers from "./mocks/offers";
import {extend} from './utils.js';

const initialState = {
  city: offers[0].city,
  offers,
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
};

const ActionCreator = {
  setCity: (payload) => ({
    type: ActionType.SET_CITY,
    payload,
  }),

  setOffers: (payload) => ({
    type: ActionType.SET_OFFERS,
    payload,
  })
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
    default: return state;
  }
};

export {ActionCreator, ActionType, reducer};
