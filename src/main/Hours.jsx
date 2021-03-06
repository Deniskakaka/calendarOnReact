import React from "react";
import { twentyFour } from "./functionTwentyFour.js";
import moment from "moment";
import './hour.scss';

const Hours = props => {
  return twentyFour().map(hour => (
    <div
      onClick={e =>
        props.showHours(
          hour < 10 ? '0' + hour + ':' + '00' : hour + ':' + '00',
          hour < 9 ? '0' + (hour + 1) + ':' + '00' : (hour + 1) + ':' + '00',
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
