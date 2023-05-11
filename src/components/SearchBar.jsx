import { useState } from "react";
import axios from "axios";
import { Dashboard } from "./Dashboard";

export function SearchBar() {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [hasData, setHasData] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // Weather and Time API call
    axios.get("http://localhost:3000/weather.json", { params: { search: params.get("search") } }).then((response) => {
      setLocation(response.data.location);
      setCurrent(response.data.current);
      setHasData(true);
      event.target.reset();
    });

    // Currency API call
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          Enter a city: <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>{hasData && <Dashboard location={location} current={current} />}</div>
    </>
  );
}
