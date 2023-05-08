export function Signup() {
  return (
    <form>
      <input type="text" name="first_name" id="first_name" />
      <input type="text" name="last_name" id="last_name" />
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <input type="password" name="password_confirmation" id="password_confirmation" />
      <input type="text" name="home_currency" id="home_currency" />
      <input type="submit" value="" />
    </form>
  );
}
