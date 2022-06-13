import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperaruteConversion from "./TemperaruteConversion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";
export default function propsInfo(props) {
  return (
    <div>
      <div className="info-container">
        <ul className="city-name">
          <li>
            <h1>{props.data.city}</h1>
          </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
        <ul className="info-weather">
          <li>
            <strong>{props.data.description}</strong>
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>wind: {props.data.wind}Km/h</li>
        </ul>
      </div>
      <div className="infoTemp">
        <div>
          <WeatherIcon code={props.data.icon} size={50} />
        </div>
        <div className="unit-temperature">
          <TemperaruteConversion celsius={props.data.temperarute} />
        </div>
      </div>
    </div>
  );
}
