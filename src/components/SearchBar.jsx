import { useState } from "react";
import axios from "axios";
import { Dashboard } from "./Dashboard";

export function SearchBar() {
  const [localTime, setLocalTime] = useState("");
  const [weather, setWeather] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.get("http://localhost:3000/weather.json", { params: { search: params.get("search") } }).then((response) => {
      console.log("Data", response.data);
      setLocalTime(response.data.location.localtime);
      console.log("Localtime Var", localTime);
      setWeather(response.data.current);
      console.log("Weather Var", weather);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Enter a city: <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <Dashboard localTime={localTime} weather={weather} />
    </div>
  );
}
