import React, { useState } from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import clear_icon from "../Assets/clear.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";

const WeatherApp = () => {
  const api_key = "069837da2154a7ad6eb727f0499f79a9";

  const [wicon, setWicon] = useState(cloud_icon);

  const [weatherData, setWeatherData] = useState({
    humidity: "64%",
    windSpeed: "5 km/h",
    temperature: "24°C",
    location: "London",
  });

  const search = async () => {
    const element = document.getElementsByClassName("container__search--input");
    if (element[0].value === "") {
      return 0;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let data;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      data = await response.json();

      setWeatherData({
        humidity: `${data.main.humidity}%`,
        windSpeed: `${Math.floor(data.wind.speed)} km/h`,
        temperature: `${Math.floor(data.main.temp)}°C`,
        location: data.name,
      });

      let newIcon;

      if (data.weather && data.weather[0]) {
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
          newIcon = clear_icon;
        } else if (
          data.weather[0].icon === "02d" ||
          data.weather[0].icon === "02n"
        ) {
          newIcon = cloud_icon;
        } else if (
          data.weather[0].icon === "03d" ||
          data.weather[0].icon === "03n"
        ) {
          newIcon = drizzle_icon;
        } else if (
          data.weather[0].icon === "04d" ||
          data.weather[0].icon === "04n"
        ) {
          newIcon = drizzle_icon;
        } else if (
          data.weather[0].icon === "09d" ||
          data.weather[0].icon === "09n"
        ) {
          newIcon = rain_icon;
        } else if (
          data.weather[0].icon === "10d" ||
          data.weather[0].icon === "10n"
        ) {
          newIcon = rain_icon;
        } else if (
          data.weather[0].icon === "13d" ||
          data.weather[0].icon === "13n"
        ) {
          newIcon = snow_icon;
        } else {
          newIcon = clear_icon;
        }

        setWicon(newIcon);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="container">
      <div className="container__top-bar">
        <input
          type="text"
          className="container__search--input"
          placeholder="Search by City"
        />
        <div
          className="container__search--icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="weather__image">
        <img src={wicon} alt="cloud icon" />
      </div>
      <div className="weather__temperature">{weatherData.temperature}</div>
      <div className="weather__location">{weatherData.location}</div>
      <div className="data__containter">
        <div className="data__element">
          <img src={humidity_icon} alt="humidity icon" className="data__icon" />
          <div className="data">
            <div className="data__value">{weatherData.humidity}</div>
            <div className="data__text">Humidity</div>
          </div>
        </div>
        <div className="data__element">
          <img src={wind_icon} alt="wind icon" className="data__icon" />
          <div className="data">
            <div className="data__value">{weatherData.windSpeed}</div>
            <div className="data__text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
