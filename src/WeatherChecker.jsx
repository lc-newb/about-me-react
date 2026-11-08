import { useState } from "react"

function WeatherChecker() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    async function getWeather() {
    try {
        setError("");
        setWeather(null);

        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&countryCode=US`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error("City not found.");
        }

        const place = data.results[0];

        const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m&temperature_unit=fahrenheit`;

        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

        setWeather({
            location: `${place.name}, ${place.admin1}`,
            temperature: weatherData.current.temperature_2m,
            humidity: weatherData.current.relative_humidity_2m
        });

    } catch (err) {
        setError(err.message || "Unable to retrieve weather.");
    }
}

    return (
        <section>
            <h2>Weather Checker</h2>

            <p>Enter a city to check the weather</p>
            
            <input
                type="text"
                value={city}
                placeholder="Enter a city"
                onChange={(event) => setCity(event.target.value)}
            />

            <button onClick={getWeather}>Check Weather</button>

            {error && (
                <p>{error}</p>
            )}

            {weather && (
            <div>
                <h3>{weather.location}</h3>
                <p>Temperature: {weather.temperature} F</p>
                <p>Humidity: {weather.humidity}%</p>
            </div>
            )}
        </section>
    );
}

export default WeatherChecker