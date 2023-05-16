/* eslint-disable react/prop-types */
export function Clock(props) {
  console.log(props.location.localtime);
  let timeStamp = new Date(props.location.localtime);
  let time = timeStamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  // Ref: https://cssanimation.rocks/clocks/
  // let hours = timeStamp.toLocaleTimeString().getHours();
  // let minutes = timeStamp.toLocaleTimeString().getMinutes();

  // let hands = [
  //   {
  //     hand: "hours",
  //     angle: hours * 30 + minutes / 2,
  //   },
  //   {
  //     hand: "minutes",
  //     angle: minutes * 6,
  //   },
  // ];

  // for (let j = 0; j < hands.length; j++) {
  //   let elements = document.querySelectorAll("." + hands[j].hand);
  //   for (let k = 0; k < elements.length; k++) {
  //     elements[k].style.webkitTransform = "rotateZ(" + hands[j].angle + "deg)";
  //     elements[k].style.transform = "rotateZ(" + hands[j].angle + "deg)";
  //     if (hands[j].hand === "minutes") {
  //       elements[k].parentNode.setAttribute("data-second-angle", hands[j + 1].angle);
  //     }
  //   }
  // }

  return (
    <div>
      <article className="clock">
        <div className="hours-container">
          <div className="hours"></div>
        </div>
        <div className="minutes-container">
          <div className="minutes"></div>
        </div>
        <div className="seconds-container">
          <div className="seconds"></div>
        </div>
      </article>
      <div className="square"></div>
      The current time in {props.location.name} is <p>{time}</p>
    </div>
  );
}
