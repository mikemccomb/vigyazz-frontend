import ReactClock from "react-clock";
import "react-clock/dist/Clock.css";

/* eslint-disable react/prop-types */
export function Clock(props) {
  console.log(props.location.localtime);
  let timeStamp = new Date(props.location.localtime);
  let time = timeStamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div>
      <div className="square">
        <ReactClock className="react-custom" value={timeStamp} renderSecondHand={false} />
      </div>
      Current time in {props.location.name}: {time}
    </div>
  );
}
