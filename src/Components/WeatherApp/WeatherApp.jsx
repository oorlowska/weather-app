import React from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="container__top-bar">
        <input
          type="text"
          className="container__search--input"
          placeholder="Search by City"
        />
        <div className="container__search--icon">
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="weather__image">
        <img src={cloud_icon} alt="cloud icon" />
      </div>
      <div className="weather__temperature">24°C</div>
      <div className="weather__location">Warsaw</div>
      <div className="data__containter">
        <div className="data__element">
          <img src="" alt="" className="data__icon" />
          <div className="data">
            <div className="data__humidity">64%</div>
            <div className="data__text">Humidity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
