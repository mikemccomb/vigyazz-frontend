import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";

export function Signup() {
  // Need to set up handleSubmit; create a post action to users.json
  const [errors, setErrors] = useState([]);
  // Need to set up error handling

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <>
      <h2>Sign up for Vigyazz</h2>
      <form onSubmit={handleSubmit}>
        <div>
          First name: <input type="text" name="first_name" id="first_name" />
        </div>
        <div>
          Last name: <input type="text" name="last_name" id="last_name" />
        </div>
        <div>
          Email: <input type="email" name="email" id="email" />
        </div>
        <div>
          Password: <input type="password" name="password" id="password" />
        </div>
        <div>
          Confirm Password: <input type="password" name="password_confirmation" id="password_confirmation" />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}
