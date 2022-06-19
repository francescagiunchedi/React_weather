import React from "react";

import "./Search.css";

export default function TemperaruteConversion(props) {
  return (
    <div>
      <h1>
        <strong>{Math.round(props.celsius)}</strong>
      </h1>
      <span>°C</span>
    </div>
  );
}
