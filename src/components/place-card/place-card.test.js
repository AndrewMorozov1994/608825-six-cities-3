import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    src: `img/apartment-01.jpg`,
    price: 120,
    type: `Apartment`,
    mark: `Premium`,
  },
];

it(`<PlaceCard /> should be render correctly`, () => {
  const placeCard = renderer.create(<PlaceCard
    offer = {offers[0]}
  />).toJSON();
  expect(placeCard).toMatchSnapshot();
});
