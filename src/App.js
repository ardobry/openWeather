import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { getDay, objFilter } from "./util";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Weekdays from "./components/weather/Weekdays";
import Weekday from "./components/weather/Weekday";
import Info from "./components/Layout/Info";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      week: {},
      forWeatherBox: []
    };
  }

  componentDidMount() {
    const apikey = "ae92e0a83a4943926597053c8f45251d";
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=yerevan,arm&appid=${apikey}`
      )
      .then(res => {
        console.log("res: ", res);
        const { data } = res,
          { forWeatherBox } = this.state;
        let week = {
          Mon: [],
          Tue: [],
          Wed: [],
          Thu: [],
          Fri: [],
          Sat: [],
          Sun: []
        };

        data.list.forEach(item => {
          let day = getDay(item.dt);
          week[day].push(item);
        }); //Sorting the array

        week = objFilter(week); //Removing empty days & sorting remaining
        console.log("week: ", week);

        week.forEach(el => {
          console.log("days: ", el);
          //adding the fetched picture to the existing data structure
          let midTime =
              Math.ceil(el.hours.length / 2) > 1
                ? Math.ceil(el.hours.length / 2)
                : Math.floor(el.hours.length / 2),
            chosenTime = el.hours[midTime];
          chosenTime.day = getDay(chosenTime.dt);
          forWeatherBox.push(chosenTime);
        });
        this.setState({ week, forWeatherBox, city: res.data.city.name });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Router>
          <Info city={this.state.city} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Weekdays {...props} forWeatherBox={this.state.forWeatherBox} />
              )}
            />
            <Route
              exact
              path="/:nameofday"
              render={props => <Weekday {...props} />}
            />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
