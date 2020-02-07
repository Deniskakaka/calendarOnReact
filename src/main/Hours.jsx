import React from "react";
import { TwentyFour } from "./functionTwentyFour.js";
import "./hour.scss";
import moment from "moment";

const Hours = props => {
  return TwentyFour().map(hour => (
    <div
      onClick={e =>
        props.showHours(
          hour < 10 ? '0' + hour + ':' + '00' : hour + ':' + '00',
          hour < 10 ? '0' + (hour + 1) + ':' + '00' : (hour + 1) + ':' + '00',
          moment().day(props.day).format('YYYY-MM-DD'),
          moment().day(props.day).format('YYYY-MM-DD')   
        )
      }
      className="hour"
      key={hour}
    ></div>
  ));
};

export default Hours;
