import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let Hour = props.date.getHours();
  if (Hour < 10) {
    Hour = `0${Hour}`;
  }
  let Minutes = props.date.getMinutes();
  if (Minutes < 10) {
    Minutes = `0${Minutes}`;
  }
  return (
    <div>
      {day} {Hour}:{Minutes}
    </div>
  );
}
