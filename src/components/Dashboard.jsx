import { SearchBar } from "./SearchBar";

export function Dashboard() {
  return (
    <div>
      <SearchBar />
      The weather in [Name of search place] is: [Pull from API]. The current time in [Name of search place] is: [Human
      Time]
    </div>
  );
}
