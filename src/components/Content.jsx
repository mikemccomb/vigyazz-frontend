import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
import { Signup } from "./Signup";

export function Content() {
  return (
    <div>
      <SearchBar />
      The weather in [Name of search place] is: [Pull from API]. The current time in [Name of search place] is: [Human
      Time]
      <Signup />
      <Login />
    </div>
  );
}
