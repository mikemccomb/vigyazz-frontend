import { useState } from "react";
import axios from "axios";
import { Dashboard } from "./Dashboard";

export function SearchBar() {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [hasData, setHasData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const params = new FormData(event.target);
    // Weather and Time API call
    axios.get("http://localhost:3000/weather.json", { params: { search: params.get("search") } }).then((response) => {
      setLocation(response.data.location);
      console.log("Country", response.data.location.country);
      setCurrent(response.data.current);
      event.target.reset();
      setHasData(true);
      setIsLoading(false);
    });

    // Use country to find 3-letter code in currency model
    // Currency API call
    // https://api.currencyapi.com/v3/latest?apikey={NOPEEKING}&currencies={CODE}
    // Only do this call if country != US
    // Use {response.data.CODE.value} * 100 to calculate exchange
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          Enter a city: <input type="text" name="search" />
          <button type="submit" disabled={isLoading}>
            Search
          </button>
        </form>
      </div>
      <div>{hasData && <Dashboard location={location} current={current} />}</div>
    </>
  );
}
