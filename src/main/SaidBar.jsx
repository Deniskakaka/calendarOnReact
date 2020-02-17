import React from "react";
import { twentyFour } from "./functionTwentyFour.js";

const SaidBar = () => {
  return (
    <div className="saidBar">
      {twentyFour().map(i => (
        <div className="hourTime" key={i}>
          {i < 10 ? "0" + i + ":" + "00" : i + ":" + "00"}
        </div>
      ))}
    </div>
  );
};

export default SaidBar;
