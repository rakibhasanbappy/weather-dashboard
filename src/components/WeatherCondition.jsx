import { useContext } from "react";
import cloud from "../assets/icons/cloud.svg";
import humidity from "../assets/icons/humidity.svg";
import temp_max from "../assets/icons/temp-max.svg";
import temp_min from "../assets/icons/temp-min.svg";
import wind from "../assets/icons/wind.svg";
import { WeatherContext } from "../context";

export default function WeatherCondition() {
  const { weather } = useContext(WeatherContext);

  return (
    <div>
      <p className="text-sm lg:text-lg text-center font-bold uppercase mb-8">
        {weather.climate}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{weather.maxTemperature}°</p>
            <img src={temp_max} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{weather.minTemperature}°</p>
            <img src={temp_min} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{weather.humidity}%</p>
            <img src={humidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{weather.cloudPercentage}%</p>
            <img src={cloud} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{weather.wind} km/h</p>
            <img src={wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
