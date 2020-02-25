import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';

const offers = [
  {
    id: 0,
    title: `Beautiful & luxurious apartment at great location`,
    src: `img/apartment-01.jpg`,
    price: 120,
    type: `Apartment`,
    isPremium: true,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Test1`,
    bedrooms: 2,
    guests: 2,
    features: [`Wifi`, `Heating`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Name1`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 1,
    title: `Wood and stone place`,
    src: `img/room.jpg`,
    price: 80,
    type: `Hotel`,
    isPremium: false,
    photos: [`img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`],
    description: `Test2`,
    bedrooms: 5,
    guests: 8,
    features: [`Wifi`, `Heating`],
    owner: {
      name: `Name2`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 2,
    title: `Canal View Prinsengracht`,
    src: `img/apartment-02.jpg`,
    price: 132,
    type: `Apartment`,
    isPremium: true,
    photos: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
    description: `Test3`,
    bedrooms: 1,
    guests: 2,
    features: [`Wifi`, `Kitchen`],
    owner: {
      name: `Name3`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 3,
    title: `Nice, cozy, warm big bed apartment`,
    src: `img/apartment-03.jpg`,
    price: 180,
    type: `Apartment`,
    isPremium: true,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`],
    description: `Test4`,
    bedrooms: 3,
    guests: 2,
    features: [`Heating`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Name4`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 4,
    title: `Wood and stone place`,
    src: `img/room.jpg`,
    price: 80,
    type: `Private room`,
    isPremium: false,
    photos: [`img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`],
    description: `Test5`,
    bedrooms: 4,
    guests: 8,
    features: [`Wifi`, `Cable TV`],
    owner: {
      name: `Name5`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    coordinates: [52.3909553943508, 4.85309666406198],
  },
];

it(`<PlaceList /> should be render correctly`, () => {
  const placeList = renderer.create(<PlaceList
    offers = {offers}
  />).toJSON();
  expect(placeList).toMatchSnapshot();
});
