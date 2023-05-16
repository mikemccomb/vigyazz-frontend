import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
import { Signup } from "./Signup";
import { Route, Routes } from "react-router-dom";

export function Content() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/search" element={<SearchBar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
