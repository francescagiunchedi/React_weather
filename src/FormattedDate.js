import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FormattedDate(props) {
  console.log(props.date);
  let day = props.date.getDay();
  return <div>{day}</div>;
}
