import axios from "axios";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function SearchResult(props) {
  const country = props.location.country.toUpperCase();
  const [currency, setCurrency] = useState("");
  const [shortcode, setShortcode] = useState("");

  // console.log(country);

  if (props.location) {
    let timeStamp = new Date(props.location.localtime);
    let time = timeStamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const handleCurrency = () => {
      axios.get(`http://localhost:3000/currencies/${country}.json`).then((response) => {
        setCurrency(response.data.currency);
        setShortcode(response.data.alphabetic_code);
      });
    };

    // const handleConversion = () => {
    //   // Build out backend call
    // }

    handleCurrency();

    return (
      <div>
        <p>
          The weather in {props.location.name} is: {props.current.condition.text} and {props.current.temp_f} degrees.
        </p>
        <img src={props.current.condition.icon} />
        <p>
          The current time in {props.location.name} is: {time}
        </p>
        <p>
          {props.location.country} uses {currency} ({shortcode}) as its currency.{" "}
        </p>
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
