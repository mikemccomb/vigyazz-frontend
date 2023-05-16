import { useState } from "react";
import axios from "axios";
import { SearchResult } from "./SearchResult";
import LoadingSpinner from "./LoadingSpinner";

export function SearchBar() {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [hasData, setHasData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const params = new FormData(event.target);
    // Weather and Time API call
    axios
      .get("http://localhost:3000/weather.json", { params: { search: params.get("search") } })
      .then((response) => {
        setLocation(response.data.location);
        setCurrent(response.data.current);
        event.target.reset();
        setHasData(true);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Hmmm, I don't have any results. Maybe there was a spelling error?");
        setIsLoading(false);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div>
        <h2>Start planning your trip</h2>
        <form onSubmit={handleSubmit}>
          Enter a city: <input type="text" name="search" />
          <button type="submit" className="btn btn-outline-primary" disabled={isLoading}>
            Search
          </button>
        </form>
      </div>
      <div>{isLoading ? <LoadingSpinner /> : hasData && <SearchResult location={location} current={current} />}</div>
    </>
  );
}
