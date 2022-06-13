import React from "react";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";

import "./Forecast.css";

export default function () {
  function handleresponse(response) {
    console.log(response.data);
  }

  const key = `4ff86370e362a341be667316345b71fc`;
  let lat = 45.4647;
  let lon = 9.1885;
  const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;
  Axios.get(api).then(handleresponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="date">thu</div>
          <div className="icon">
            <WeatherIcon code="01d" size={30} />{" "}
          </div>
          <div className="temp">
            <span className="temp-max">max temp</span>
            <span>/</span>
            <span className="temp-min">min temp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
