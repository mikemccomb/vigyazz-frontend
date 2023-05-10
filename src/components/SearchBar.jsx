// import { useState } from "react";
import axios from "axios";

export function SearchBar() {
  // const [searchFilter, setSearchFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1st");
    const params = new FormData(event.target);
    axios
      .get("http://localhost:3000/weather.json", { params: { search: params.get("search") } })
      .then((response) => console.log("Yo", response.data));
    console.log("2nd");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Enter a city: <input type="text" name="search" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
