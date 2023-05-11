import { useState } from "react";
import axios from "axios";
import { Dashboard } from "./Dashboard";

export function SearchBar() {
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.get("http://localhost:3000/weather.json", { params: { search: params.get("search") } }).then((response) => {
      setData(response.data);
      console.log("Data", data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Enter a city: <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <Dashboard data={data} />
    </div>
  );
}
