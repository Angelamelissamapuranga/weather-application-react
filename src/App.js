import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Weather defaultCity="Brussels" />
      <footer>
        This project was coded by Angela Mapuranga and it is{" "}
        <a href="https://github.com/Angelamelissamapuranga/weather-application-react">
          {" "}
          open sourced
        </a>
      </footer>
    </div>
  );
}
