import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Route, Routes } from "react-router-dom";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
