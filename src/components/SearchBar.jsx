import { useEffect, useState } from "react";
import axios from "axios";

export function SearchBar() {
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/weather`).then((response) => console.log(response.data));
  });

  return (
    <div>
      <div>
        Search:{" "}
        <input type="search" value={searchFilter} list="" onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
    </div>
  );
}
