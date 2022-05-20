import React from "react";
import axios from "axios";
import { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";
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
            <li>Monday 14:30</li>
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
          <ReactAnimatedWeather
            className="weather-icon"
            icon="CLEAR_DAY"
            color="orange"
            size={65}
            animate={true}
          />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
