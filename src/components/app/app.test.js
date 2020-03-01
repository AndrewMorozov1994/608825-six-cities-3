import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

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
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: 0,
        text: `Text1 offer1`,
        user: `Name1`,
        date: `2020-01-01`,
      },
      {
        id: 1,
        text: `Text2 offer1`,
        user: `Name2`,
        date: `2020-01-02`,
      },
      {
        id: 2,
        text: `Text3 offer1`,
        user: `Name3`,
        date: `2020-01-03`,
      }
    ],
    nearOffers: [
      {
        id: 1,
        title: `Wood and stone place`,
        src: `img/room.jpg`,
        price: 80,
        type: `Hotel`,
        isPremium: false,
        coordinates: [52.369553943508, 4.85309666406198],
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        src: `img/apartment-02.jpg`,
        price: 132,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3909553943508, 4.929309666406198],
      },
    ],
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
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: 0,
        text: `Text1 offer2`,
        user: `Name1`,
        date: `2020-01-01`,
      },
      {
        id: 1,
        text: `Text2 offer2`,
        user: `Name2`,
        date: `2020-01-02`,
      },
      {
        id: 2,
        text: `Text3 offer2`,
        user: `Name3`,
        date: `2020-01-03`,
      }
    ],
    nearOffers: [
      {
        id: 0,
        title: `Beautiful & luxurious apartment at great location`,
        src: `img/apartment-01.jpg`,
        price: 120,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3909553943508, 4.85309666406198],
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        src: `img/apartment-02.jpg`,
        price: 132,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3909553943508, 4.929309666406198],
      },
    ],
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
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        id: 0,
        text: `Text1 offer3`,
        user: `Name1`,
        date: `2020-01-01`,
      },
      {
        id: 1,
        text: `Text2 offer3`,
        user: `Name2`,
        date: `2020-01-02`,
      },
      {
        id: 2,
        text: `Text3 offer3`,
        user: `Name3`,
        date: `2020-01-03`,
      }
    ],
    nearOffers: [
      {
        id: 4,
        title: `Wood and stone place`,
        src: `img/room.jpg`,
        price: 80,
        type: `Private room`,
        isPremium: false,
        coordinates: [52.3809553943508, 4.9],
      },
      {
        id: 3,
        title: `Nice, cozy, warm big bed apartment`,
        src: `img/apartment-03.jpg`,
        price: 180,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3809553943508, 4.939309666406198],
      },
    ],
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
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        id: 2,
        text: `Text3 offer4`,
        user: `Name3`,
        date: `2020-01-03`,
      }
    ],
    nearOffers: [
      {
        id: 0,
        title: `Beautiful & luxurious apartment at great location`,
        src: `img/apartment-01.jpg`,
        price: 120,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3909553943508, 4.85309666406198],
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        src: `img/apartment-02.jpg`,
        price: 132,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3909553943508, 4.929309666406198],
      },
    ],
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
    coordinates: [52.3809553943508, 4.9],
    reviews: [
      {
        id: 0,
        text: `Text1 offer5`,
        user: `Name1`,
        date: `2020-01-01`,
      },
      {
        id: 1,
        text: `Text2 offer5`,
        user: `Name2`,
        date: `2020-01-02`,
      },
    ],
    nearOffers: [
      {
        id: 1,
        title: `Wood and stone place`,
        src: `img/room.jpg`,
        price: 80,
        type: `Hotel`,
        isPremium: false,
        coordinates: [52.369553943508, 4.85309666406198],
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        src: `img/apartment-02.jpg`,
        price: 132,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3909553943508, 4.929309666406198],
      },
    ],
  },
];

it(`<App /> should be render correctly`, () => {
  const app = renderer.create(<App
    offersCount = {offersCount}
    offers = {offers}
  />).toJSON();
  expect(app).toMatchSnapshot();
});
