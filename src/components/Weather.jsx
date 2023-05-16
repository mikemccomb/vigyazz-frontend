/* eslint-disable react/prop-types */
import "./Weather.css";

export function Weather(props) {
  return (
    <div>
      <img src={props.current.condition.icon} />
      <p>
        The weather in {props.location.name} is: {props.current.condition.text} and {props.current.temp_f} degrees.
      </p>
    </div>
  );
}
