import { useState } from "react";

const API_KEY = "ed2828e59ddf36874f1950c82bf3f254";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("Temperature");
  const [weather, setWeather] = useState("Weather Description");
  const [humidity, setHumidity] = useState("Humidity");
  const [pressure, setPressure] = useState("Air Pressure");

  const getWeather = async () => {
    const myCity = city.trim();
    if (!myCity) {
      setInfoRes("Please enter a city name!");
      return;
    }
    const url =
      BASE_URL + "q=" + myCity + "&appid=" + API_KEY + "&units=metric";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const main = data["main"];
    const weather_data = data["weather"][0];
    const temperature = main["temp"];
    const weather_desc = weather_data["description"];
    const humidity_data = main["humidity"];
    const pressure_data = main["pressure"];
    setTemp(`Temperature: ${temperature}°C\n`);
    setWeather(`Weather: ${weather_desc}\n`);
    setHumidity(`Humidity: ${humidity_data}%\n`);
    setPressure(`Pressure: ${pressure_data} hPa`);
  };

  return (
    <div className="container">
      <h2 className="heading">Weather app</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input-field"
      />
      <button className="btn" onClick={getWeather}>
        Get Weather
      </button>
      <p className="temp">{temp}</p>
      <p className="desc">{weather}</p>
      <p className="humidity">{humidity}</p>
      <p className="pressure">{pressure}</p>
    </div>
  );
}

export default App;
