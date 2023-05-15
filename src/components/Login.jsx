import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/search";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <>
      <h2>Log into Vigyazz</h2>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input type="email" name="email" id="email-login" />
        </div>
        <div>
          Password: <input type="password" name="password" id="password-login" />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </>
  );
}
