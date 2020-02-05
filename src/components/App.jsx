import React from "react";
import Main from "./main.jsx";

const App = (props) => {

  const {offersCount} = props;

  return (
    <Main
      offersCount = {offersCount}
    />
  );
};

export default App;
