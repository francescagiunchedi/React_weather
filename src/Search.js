import React from "react";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";

export default function Search(props) {
  const [city, setcity] = useState(props.cityDefault);
  const [weather, Setweather] = useState({});
  const [load, setload] = useState(false);

  function ShowTemp(response) {
    console.log(response.data);
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

  function search() {
    const key = `4ff86370e362a341be667316345b71fc`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(ShowTemp);
  }

  function HandleSubmit(event) {
    event.preventDefaul();
    Search();
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
      <input type="button" value="Search" className="btn btn-primary" />
    </form>
  );

  if (load) {
    return (
      <div>
        {form}
        <WeatherInfo data={weather} />
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
