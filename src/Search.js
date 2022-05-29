import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import "./Search.css";

export default function Search() {
  const [weather, Setweather] = useState({});
  const [load, setload] = useState(false);

  let form = (
    <form className="form-group">
      <input type="search" placeholder="search city" className="form-control" />
      <input type="button" value="Search" className="btn btn-primary" />
    </form>
  );

  function ShowTemp(response) {
    Setweather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperarute: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });

    setload(true);
  }

  if (load) {
    return (
      <div>
        {form}
        <div className="info-container">
          <ul>
            <li>
              <h1>{weather.city}</h1>
            </li>
            <li>
              <FormattedDate date={weather.date} />
            </li>
            <li>{weather.description}</li>
          </ul>
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>wind: {weather.wind}Km/h</li>
          </ul>
        </div>
        <div className="infoTemp">
          <h1>
            <strong>{Math.round(weather.temperarute)}</strong>
            °c
          </h1>
        </div>
      </div>
    );
  } else {
    let city = "Milan";
    const key = `4ed23580ff61d0d4cc91543013f4263b`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(ShowTemp);

    return (
      <div>
        {form}
        <div className="info-container">
          <h1>Type a city</h1>
        </div>
      </div>
    );
  }
}
