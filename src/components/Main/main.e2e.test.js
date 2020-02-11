import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

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

Enzyme.configure({
  adapter: new Adapter()
});

it(`apartmentTitles should be pressed`, () => {
  const apartmentTitlesClickHandler = jest.fn();
  const main = shallow(
      <Main
        offersCount = {offersCount}
        apartments = {apartments}
        apartmentTitlesClickHandler={apartmentTitlesClickHandler}
      />);
  const apartmentTitles = main.find(`.place-card__name a`);
  apartmentTitles.forEach((it) => {
    it.props().onClick();
  });
  expect(apartmentTitlesClickHandler.mock.calls.length).toBe(apartments.length);
});
