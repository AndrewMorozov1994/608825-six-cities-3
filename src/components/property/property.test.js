import React from 'react';
import renderer from 'react-test-renderer';
import Property from './property.jsx';

const offers = [
  {
    id: 1,
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
  },
];

it(`<Property /> should be render correctly`, () => {
  const property = renderer.create(<Property
    card = {offers[0]}
  />).toJSON();
  expect(property).toMatchSnapshot();
});
