import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";
import Forecast from "./Forecast";

export default function Search(props) {
  const [city, setcity] = useState(props.cityDefault);
  const [weather, Setweather] = useState({ load: false });

  function ShowTemp(response) {
    Setweather({
      load: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperarute: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    });

    console.log(response.data);
  }

  function search() {
    const key = `4ff86370e362a341be667316345b71fc`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(ShowTemp);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    search();
  }

  function HandleCityChange(event) {
    setcity(event.target.value);
  }
  let form = (
    <form className="form-group" onSubmit={HandleSubmit}>
      <input
        type="search"
        placeholder="search city"
        className="form-control"
        onChange={HandleCityChange}
      />
      <input type="submit" value="Search" className="btn btn-primary" />
    </form>
  );

  if (weather.load) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
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
