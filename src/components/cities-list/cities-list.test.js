import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

it(`<CitiesList /> should be render correctly`, () => {
  const citiesList = renderer.create(
      <CitiesList
        citiesList={[`Paris`, `Amsterdam`, `Hamburg`]}
        city={`Amsterdam`}
        onCityClick = {() => {}}
      />)
    .toJSON();
  expect(citiesList).toMatchSnapshot();
});
