import { useState } from 'react';

const useWeather = () => {
    const [weather, setWeather] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        wind: "",
        humidity: "",
        cloudPercentage: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    const [error, setError] = useState(null);


    const fetchWeatherData = async (latitude, longitude) => {
        setLoading({ state: true, message: "Loading weather data..." });
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.VITE_WEATHER_API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
            setWeather({
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                wind: data?.wind?.speed,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                time: new Date(data.dt * 1000).toLocaleTimeString(),
                longitude: data?.coord?.lon,
                latitude: data?.coord?.lat,
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading({ state: false, message: "" });
        }
    };

    return { weather, loading, error, fetchWeatherData };

}