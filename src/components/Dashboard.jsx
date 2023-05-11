/* eslint-disable react/prop-types */
export function Dashboard(props) {
  console.log("Dashboard", props);
  return (
    <div>
      <p>
        The weather in {props.location.name} is: {props.current.condition.text} and {props.current.temp_f} degrees.
      </p>
      <img src={props.current.condition.icon} />
      <p>
        The current time in {props.location.name} is: {props.location.localtime}
      </p>
    </div>
  );
}
