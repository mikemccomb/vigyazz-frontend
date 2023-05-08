export function Signup() {
  return (
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
        What currency do you use? <input type="text" name="home_currency" id="home_currency" />
      </div>
      <input type="submit" value="Sign up" />
    </form>
  );
}
