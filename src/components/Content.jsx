import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
import { Signup } from "./Signup";
import { Route, Routes } from "react-router-dom";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
