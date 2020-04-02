import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";

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
    rating: 1,
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
        rating: 1,
      },
      {
        id: 1,
        text: `Text2 offer1`,
        user: `Name2`,
        date: `2020-01-02`,
        rating: 1,
      },
      {
        id: 2,
        text: `Text3 offer1`,
        user: `Name3`,
        date: `2020-01-03`,
        rating: 1,
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
        rating: 1,
      },
      {
        id: 2,
        title: `Canal View Prinsengracht`,
        src: `img/apartment-02.jpg`,
        price: 132,
        type: `Apartment`,
        isPremium: true,
        coordinates: [52.3909553943508, 4.929309666406198],
        rating: 1,
      },
    ],
  },
];

it(`<ReviewsItem /> should be render correctly`, () => {
  const reviewsItem = renderer.create(<ReviewsItem
    review={offers[0].reviews[0]}
  />)
  .toJSON();
  expect(reviewsItem).toMatchSnapshot();
});
