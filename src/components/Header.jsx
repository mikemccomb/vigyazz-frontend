import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed-top container-fluid">
      <h1>Welcome to Vigyazz!</h1>
      <nav className="nav nav-pills nav-fill">
        {localStorage.jwt === undefined ? (
          <>
            <Link to="/signup" className="nav-link active" aria-current="page">
              Signup
            </Link>
            <Link to="/login" className="nav-link active" aria-current="page">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to="/search" className="nav-link active" aria-current="page">
              Search
            </Link>
            <Link to="/" className="nav-link disabled" aria-current="page">
              Dashboard
            </Link>
            <LogoutLink className="nav-link active" aria-current="page" />
          </>
        )}
      </nav>
    </header>
  );
}
