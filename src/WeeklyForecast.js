import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

import "./WeeklyForecast.css";
export default function WeeklyForecast() {
  let weekDay = [
    {
      day: "Sun",
      icon: (
        <ReactAnimatedWeather
          className="weather-icon"
          icon="WIND"
          color="hsl(0, 0%, 51%)"
          size={30}
          animate={true}
        />
      ),
      temp: `${13}°`,
    },
    {
      day: "Mon",
      icon: (
        <ReactAnimatedWeather
          className="weather-icon"
          icon="CLOUDY"
          color="hsl(0, 0%, 51%)"
          size={30}
          animate={true}
        />
      ),
      temp: `${15}°`,
    },
    {
      day: "Tue",
      icon: (
        <ReactAnimatedWeather
          className="weather-icon"
          icon="CLEAR_DAY"
          color="orange"
          size={30}
          animate={true}
        />
      ),
      temp: `${23}°`,
    },
    {
      day: "Wed",
      icon: (
        <ReactAnimatedWeather
          className="weather-icon"
          icon="CLOUDY"
          color="hsl(0, 0%, 51%)"
          size={30}
          animate={true}
        />
      ),
      temp: `${20}°`,
    },
    {
      day: "Thu",
      icon: (
        <ReactAnimatedWeather
          className="weather-icon"
          icon="CLEAR_DAY"
          color="orange"
          size={30}
          animate={true}
        />
      ),
      temp: `${15}°`,
    },
    {
      day: "Sat",
      icon: (
        <ReactAnimatedWeather
          className="weather-icon"
          icon="RAIN"
          color="hsl(0, 0%, 51%)"
          size={30}
          animate={true}
        />
      ),
      temp: `${10}°`,
    },
  ];
  return (
    <div className="weekly-forecast row">
      {weekDay.map(function (day, index) {
        return (
          <div className="col-4 col-sm-4 col-md-2 ">
            <ul key={index} className="pt-4">
              <li>{day.day}</li>
              <li>{day.icon}</li>
              <li>{day.temp}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
