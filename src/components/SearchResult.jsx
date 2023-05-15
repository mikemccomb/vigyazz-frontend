/* eslint-disable react/prop-types */
export function SearchResult(props) {
  console.log("Loc", props.location);
  let country = props.location.country.toUpperCase();

  console.log(country);

  if (props.location) {
    let timeStamp = new Date(props.location.localtime);
    let time = timeStamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
      <div>
        <p>
          The weather in {props.location.name} is: {props.current.condition.text} and {props.current.temp_f} degrees.
        </p>
        <img src={props.current.condition.icon} />
        <p>
          The current time in {props.location.name} is: {time}
        </p>
        <p>{props.location.country} uses [Currency] ([AAA]) as its currency. </p>
        <p>The current exchange rate for $100 is [Converted AAA]</p>
      </div>
    );
  } else {
    {
      return (
        <div>
          <p>Hmmm, I don&apos;t have any results. Maybe there was a spelling error?</p>
        </div>
      );
    }
  }
}
