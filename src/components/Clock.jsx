import ReactClock from "react-clock";

/* eslint-disable react/prop-types */
export function Clock(props) {
  console.log(props.location.localtime);
  let timeStamp = new Date(props.location.localtime);
  let time = timeStamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div>
      <div className="square">
        <ReactClock className="react-custom" value={new Date()} />
      </div>
      The current time in {props.location.name} is <p>{time}</p>
    </div>
  );
}
