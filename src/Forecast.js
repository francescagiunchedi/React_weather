import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ForecastDay from "./ForecastDay";
import Axios from "axios";

import "./Forecast.css";

export default function (props) {
  let [loaded, setloaded] = useState(false);
  let [Forecast, setForecast] = useState(null);

    useEffect(() => {
      setloaded(false);
    }, [props.coordinates]);

  function handleresponse(response) {
    setForecast(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    console.log(Forecast);
    return (
      <div className="Forecast">
        <div className="row">
          {Forecast.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay day={dailyforecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const key = `4ff86370e362a341be667316345b71fc`;
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    Axios.get(api).then(handleresponse);
    return null;
  }
}
