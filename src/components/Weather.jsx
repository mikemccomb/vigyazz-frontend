/* eslint-disable react/prop-types */
import "./Weather.css";

export function Weather(props) {
  return (
    <div>
      <div className="square">
        <img src={props.current.condition.icon} />
      </div>
      <div>
        The weather in {props.location.name} is {props.current.condition.text.toLowerCase()} and {props.current.temp_f}{" "}
        degrees.
      </div>
    </div>
  );
}
