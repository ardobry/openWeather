import React from "react";
import WeatherBox from "./WeatherBox";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const Weekdays = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.forWeatherBox.map((item, index) => (
          <Grid item xs={6} sm={3}>
            <WeatherBox changePage={props.changePage} key={index} data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Weekdays;
