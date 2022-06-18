import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let max = Math.round(props.day.temp.max);
    return `${max}°`;
  }
  function minTemp() {
    let min = Math.round(props.day.temp.min);
    return `${min}°`;
  }

  function Day() {
    let date = new Date(props.day.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="date">{Day()}</div>
      <div className="icon">
        <WeatherIcon code={props.day.weather[0].icon} size={35} />{" "}
      </div>
      <div className="temp">
        <span className="temp-max">{maxTemp()}</span>
        <span>/</span>
        <span className="temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
