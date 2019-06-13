import React from "react";
import Container from "@material-ui/core/Container";
import Chart from "../Layout/Chart";

const Weekday = props => {
  return (
    <Container>
      <article className="canvas-container">
        <Chart data={props.data} />
      </article>
    </Container>
  );
};

export default Weekday;
