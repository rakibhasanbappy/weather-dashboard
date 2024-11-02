import { useEffect, useState } from 'react';

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
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
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

    useEffect(() => {

        setLoading({ state: true, message: "Fetching location..." });

        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                setError(error);
            }
        );
        setLoading({ state: false, message: "" });
    }, []);

    return { weather, loading, error };

}

export default useWeather;

 
//  In the above code, we have created a custom hook called  useWeather  that fetches the weather data from the OpenWeatherMap API. 
//  The custom hook returns an object with three properties:  weather ,  loading , and  error . 
//  The  weather  object contains the weather data fetched from the API. The  loading  object contains the loading state and message. The  error  object contains any error that occurred during the fetching of weather data. 
//  Now, let’s use this custom hook in our  App  component.