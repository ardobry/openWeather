import React, { Fragment } from "react";

const Info = props => {
  return (
    <Fragment>
      <h2>OpenWeather</h2>
      <h3>Weather for {props.city}</h3>
    </Fragment>
  );
};

export default Info;
