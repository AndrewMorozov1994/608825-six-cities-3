import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.jsx';

const offersCount = 312;

const apartments = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    src: `img/apartment-01.jpg`,
    price: 120,
    type: `Apartment`,
    mark: `Premium`,
  },
  {
    id: 2,
    title: `Wood and stone place`,
    src: `img/room.jpg`,
    price: 80,
    type: `Private room`,
    mark: ``,
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    src: `img/apartment-02.jpg`,
    price: 132,
    type: `Apartment`,
    mark: ``,
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    src: `img/apartment-03.jpg`,
    price: 180,
    type: `Apartment`,
    mark: `Premium`,
  },
  {
    id: 5,
    title: `Wood and stone place`,
    src: `img/room.jpg`,
    price: 80,
    type: `Private room`,
    mark: ``,
  },
];

it(`<App /> should be render correctly`, () => {
  const app = renderer.create(<App
    offersCount = {offersCount}
    apartments = {apartments}
  />).toJSON();
  expect(app).toMatchSnapshot();
});
