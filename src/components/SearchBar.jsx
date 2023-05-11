import { useState } from "react";
import axios from "axios";
import { Dashboard } from "./Dashboard";

export function SearchBar() {
  // const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.get("http://localhost:3000/weather.json", { params: { search: params.get("search") } }).then((response) => {
      // setData(response.data);
      setLocation(response.data.location);
      setCurrent(response.data.current);
      console.log("Loc", location);
      console.log("Cur", current);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Enter a city: <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <Dashboard location={location} current={current} />
    </div>
  );
}
