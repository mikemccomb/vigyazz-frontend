import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed-top container-fluid">
      <h1>Welcome to Vigy&aacute;zz!</h1>
      <nav className="nav nav-pills nav-fill">
        {localStorage.jwt ? (
          <>
            <Link to="/search" className="nav-link active" aria-current="page">
              Plan your trip
            </Link>
            <Link to="/" className="nav-link disabled" aria-current="page">
              Dashboard
            </Link>
            <LogoutLink className="nav-link active" aria-current="page" />
          </>
        ) : (
          <>
            <Link to="/signup" className="nav-link active" aria-current="page">
              Signup
            </Link>
            <Link to="/login" className="nav-link active" aria-current="page">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
