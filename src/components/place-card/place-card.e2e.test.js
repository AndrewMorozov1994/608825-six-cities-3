import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

Enzyme.configure({
  adapter: new Adapter()
});

it(`Place-card info mousover`, () => {
  const onCardMouseOver = jest.fn();
  const placeCard = shallow(
      <PlaceCard
        offer = {offers[0]}
        onCardMouseOver = {onCardMouseOver}
      />);
  const card = placeCard.find(`.place-card`);

  card.simulate(`mouseOver`);

  expect(onCardMouseOver.mock.calls.length).toBe(1);
});
