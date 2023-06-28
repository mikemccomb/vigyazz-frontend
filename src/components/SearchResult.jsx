import axios from "axios";
import { useState } from "react";
import "./SearchResult.css";
import { Clock } from "./Clock";
import { Weather } from "./Weather";

/* eslint-disable react/prop-types */
export function SearchResult(props) {
  if (props.data.location) {
    const country = props.data.location.country.replace(/\s+/g, "%20").toUpperCase();
    const [currency, setCurrency] = useState("");
    const [shortcode, setShortcode] = useState("");
    // const [conversion, setConversion] = useState(0);
    // const [photo, setPhoto] = useState("");

    console.log(country);

    const handleCurrency = () => {
      axios
        .get(`https://vigyazz.onrender.com/currencies/${country}.json`)
        .then((response) => {
          setCurrency(response.data.currency);
          setShortcode(response.data.alphabetic_code);
          // setConversion(response.data.conversion);
        })
        .catch(() => {
          console.log("Can't pull currency");
        });
    };

    // const handleConversion = () => {
    //   // Build out backend call using shortcode
    // };

    // const handlePhoto = () = {}

    handleCurrency();
    console.log(currency);

    return (
      <div className="row container-fluid" id="search-result">
        <div className="card" id="weather">
          <Weather location={props.data.location} current={props.data.current} />
        </div>
        <div className="card" id="time">
          <Clock location={props.data.location} />
        </div>
        {currency ? (
          <div className="card" id="currency">
            <div className="square"></div>
            {props.data.location.country} uses {currency} ({shortcode}) as its currency.{" "}
            {/* <p>
              The current exchange rate for $100 is {conversion} {currency}
            </p> */}
          </div>
        ) : (
          <p></p>
        )}
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
