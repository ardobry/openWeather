import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {},
  input: {
    display: "none"
  }
}));

const WeatherBox = props => {
  const infoContainer = props.data.weather[0],
    classes = useStyles();

  console.log("props: ", props);
  return (
    <Box component="div">
      <Button variant="contained" className={classes.button}>
        <Link to={`/${props.data.day}`} className="to act on hover">
          <div className="day-name">{props.data.day}</div>
          <img
            width="55px"
            height="55px"
            src={`http://openweathermap.org/img/w/${infoContainer.icon}.png`}
            alt={infoContainer.description}
          />
          <div>
            <span>{Math.round(props.data.main.temp_max - 273.15)}&deg;</span>
            <span className="min-temp">
              {Math.round(props.data.main.temp_min - 273.15)}&deg;
            </span>
          </div>
        </Link>
      </Button>
    </Box>
  );
};

export default WeatherBox;
