import { useContext } from "react";

import pin from "../assets/pin.svg";
import { WeatherContext } from "../context";

import CloudIcon from "../assets/cloud.svg";
import HazeIcon from "../assets/haze.svg";
import RainyIcon from "../assets/rainy.svg";
import SnowIcon from "../assets/snow.svg";
import SunnyIcon from "../assets/sun.svg";
import ThuderIcon from "../assets/thunder.svg";

export default function WeatherHeadline() {
  const { weather } = useContext(WeatherContext);

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Clouds":
        return CloudIcon;
      case "Snow":
        return SnowIcon;
      case "Clear":
        return SunnyIcon;
      case "Rain":
        return RainyIcon;
      case "Haze":
        return HazeIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      case "Thunderstorm":
        return ThuderIcon;
      default:
        return SunnyIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(weather.climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {weather.temperature}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{weather.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{weather.time}</p>
    </div>
  );
}
