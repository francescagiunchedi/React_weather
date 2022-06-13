import { useState } from "react";
import React from "react";

import "./Search.css";

export default function TemperaruteConversion(props) {
  const [unit, setunit] = useState("Celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setunit("Fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setunit("Celsius");
  }
  if (unit === "Celsius") {
    return (
      <div>
        <h1>
          <strong>{Math.round(props.celsius)}</strong>
        </h1>
        <span>
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let Fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <h1>
          <strong>{Math.round(Fahrenheit)}</strong>
        </h1>
        <span>
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
