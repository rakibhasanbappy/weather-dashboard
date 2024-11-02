import { WeatherContext } from "../context/WeatherContext";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weather, error, loading } = useWeather();

  return (
    <WeatherContext.Provider value={{ weather, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
