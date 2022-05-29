import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import "./Search.css";

export default function Search() {
  const [city, Setcity] = useState("");
  const [weather, Setweather] = useState({});
  const [load, setload] = useState(false);

  function updatecity(event) {
    Setcity(event.target.value);
  }

  function ShowTemp(response) {
    setload(true);
    Setweather({
      date: new Date(response.data.dt * 1000),
      temperarute: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function WeatherCall(event) {
    event.preventDefault();
    let key = `4ff86370e362a341be667316345b71fc`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(ShowTemp);
  }
  let form = (
    <form className="form-group" onSubmit={WeatherCall}>
      <input
        type="search"
        placeholder="search city"
        onChange={updatecity}
        className="form-control"
      />
      <input type="button" value="Search" className="btn btn-primary" />
    </form>
  );
  if (load) {
    return (
      <div>
        {form}
        <div className="info-container">
          <ul>
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
    return (
      <div>
        {form}
        <div className="info-container">
          <ul>
            <li>
              <FormattedDate date={weather.date} />
            </li>
          </ul>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="infoTemp">
          <h1>Type a city</h1>
        </div>
      </div>
    );
  }
}
