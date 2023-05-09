import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  return (
    <>
      <h2>Log into Vigyazz</h2>
      <form onSubmit="">
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
