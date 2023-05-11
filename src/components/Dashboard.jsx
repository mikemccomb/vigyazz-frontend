/* eslint-disable react/prop-types */
export function Dashboard(props) {
  console.log("Loc", props.location);
  let timeStamp = new Date(props.location.localtime);
  let time = timeStamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (props.location) {
    return (
      <div>
        <p>
          The weather in {props.location.name} is: {props.current.condition.text} and {props.current.temp_f} degrees.
        </p>
        <img src={props.current.condition.icon} />
        <p>
          The current time in {props.location.name} is: {time}
        </p>
        <p>The current exchange rate for $100 is [money please]</p>
      </div>
    );
  } else {
    {
      ("");
    }
  }
}
