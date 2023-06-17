import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState([]);
  // Need to set up error handling

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        localStorage.setItem("flashMessage", "User created! Welcome aboard!");
        window.location.href = "/login";
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="positioning">
      <h2>Sign up for Vigy&aacute;zz</h2>
      <ul>
        {status}
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          First name: <input type="text" className="form-control" name="first_name" id="first_name" />
        </div>
        <div className="mb-3">
          Last name: <input type="text" className="form-control" name="last_name" id="last_name" />
        </div>
        <div className="mb-3">
          Email: <input type="email" className="form-control" name="email" id="email" />
        </div>
        <div className="mb-3">
          Password: <input type="password" className="form-control" name="password" id="password" />
        </div>
        <div className="mb-3">
          Confirm Password:{" "}
          <input type="password" className="form-control" name="password_confirmation" id="password_confirmation" />
        </div>
        <div>
          <button type="submit" className="btn btn-outline-primary">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
