import React from "react";
import { useState } from "react";
export default function CardSelector(props) {
  
  return (
    <>
      <select  data-tid="selector" >
        <option value="American Express" selected="selected">American Express</option>
        <option value="Visa" >
          Visa
        </option>
        <option value="Mastercard">Mastercard</option>
        <option value ="Discover"> Discover </option>
      </select>
      
    </>
  );
}
