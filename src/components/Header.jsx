import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>Welcome to Vigyazz!</h1>
      <div>
        <ul>
          {localStorage.jwt === undefined ? (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <LogoutLink />
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
