import { useState } from "react";

export function SearchBar() {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <div>
        Search:{" "}
        <input type="search" value={searchFilter} list="" onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
    </div>
  );
}
