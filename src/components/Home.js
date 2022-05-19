import React, { useEffect, useState } from "react";

import CardSelector from "./Cardselector";
import "./Home.css";
import CardImage from "./CardImage";
import RandomNumber from "./RandomNumber";
const obj = [
  {
    card: "Visa",
    img: "https://bhuone-garbu.github.io/js-credit-card-generator/static/media/visa.67f273f0.svg",
  },
  {
    card: "American Express",
    img: "https://bhuone-garbu.github.io/js-credit-card-generator/static/media/amex.3a070c47.svg",
  },
  {
    card: "Discover",
    img: "https://bhuone-garbu.github.io/js-credit-card-generator/static/media/discover.67a87acb.svg",
  },
  {
    card: "Mastercard",
    img: "https://bhuone-garbu.github.io/js-credit-card-generator/static/media/mastercard.5966f60b.svg",
  },
];

export default function Home() {
  
  return (
    <>
      <div className="cont">
        <CardSelector  />
        <CardImage />
        <RandomNumber  />
      </div>
    </>
  );
}
