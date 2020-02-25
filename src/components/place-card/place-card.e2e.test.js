import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

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
