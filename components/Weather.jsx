"use client";
import { useState, useEffect } from "react";
import styles from '../styles/Weather.module.css';

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setWeather({ temperature: 22, windspeed: 10, condition: "Sunny" });
  }, []);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className={`${styles.weather} ${styles[weather.condition.toLowerCase()]}`}>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}