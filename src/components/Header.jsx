import { LogoutLink } from "./LogoutLink";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header>
      <h1>Welcome to Vigyazz!</h1>
      <a href="/signup">Signup</a> | <a href="/login">Login</a> | <LogoutLink /> | <SearchBar />
    </header>
  );
}
