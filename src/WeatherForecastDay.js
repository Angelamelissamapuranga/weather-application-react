import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function mapForecastIcon(icon) {
    if (icon.includes("clear")) return "01d";
    if (icon.includes("cloud")) return "03d";
    if (icon.includes("rain")) return "10d";
    if (icon.includes("snow")) return "13d";
    if (icon.includes("mist")) return "50d";
    return "01d";
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon
        code={mapForecastIcon(props.data.condition.icon)}
        size={32}
      />
      <div className="Forecast-temperatures">
        <span className="ForecastTemperature-max">{maxTemperature()}</span>
        <span className="ForecastTemperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
