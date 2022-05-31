import React from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";

export default function propsInfo(props) {
  return (
    <div>
      <div className="info-container">
        <ul>
          <li>
            <h1>{props.data.city}</h1>
          </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>wind: {props.data.wind}Km/h</li>
        </ul>
      </div>
      <div className="infoTemp">
        <h1>
          <strong>{Math.round(props.data.temperarute)}</strong>
          °c
        </h1>
      </div>
    </div>
  );
}
