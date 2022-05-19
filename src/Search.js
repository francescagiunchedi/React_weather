import React from "react";
import axios from "axios";
import { useState } from "react";

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
    <form className="Search_form" onSubmit={WeatherCall}>
      <input type="search" placeholder="search city" onChange={updatecity} />
      <input type="button" value="Search" />
    </form>
  );
  if (load) {
    return (
      <div>
        <div className="infoTemperature">
          {form}
          <ul>
            <li>date</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>wind: {weather.wind}Km/h</li>
          </ul>
          <h1>{Math.round(weather.temperarute)}°C</h1>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
