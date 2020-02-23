import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const offersCount = 312;

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
  },
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`apartmentTitles should be pressed`, () => {
  const apartmentTitlesClickHandler = jest.fn();
  const main = mount(
      <Main
        offersCount = {offersCount}
        offers = {offers}
        apartmentTitlesClickHandler={apartmentTitlesClickHandler}
      />);
  const apartmentTitles = main.find(`.place-card__name a`);
  apartmentTitles.forEach((it) => {
    it.props().onClick();
  });
  expect(apartmentTitlesClickHandler.mock.calls.length).toBe(offers.length);
});
