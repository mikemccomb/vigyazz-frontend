import axios from "axios";
import { useState } from "react";
import Select from "react-select";

export function Signup() {
  // Need to set up handleSubmit; create a post action to users.json
  // Need to set up error handling

  const options = [
    { value: "A", label: "Test A" },
    { value: "B", label: "Test B" },
    { value: "C", label: "Test C" },
  ];

  return (
    <>
      <h2>Sign up for Vigyazz</h2>
      <form>
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
        <div>
          What currency do you use? <Select options={options} />
          <input type="text" name="home_currency" id="home_currency" />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}
