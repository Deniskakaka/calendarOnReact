import React from "react";
import moment from "moment";
import './day.scss';

const Day = props => {
  const today = moment().format("YYYY-MM-D");
  return props.ArrayOFWeek.map(day => (
    <div className="day" key={day}>
      <span className="day__name">
        {moment()
          .day(day)
          .format("ddd")}
      </span>
      <span
        className={
          today ===
          moment()
            .day(day)
            .format("YYYY-MM-D")
            ? "day__number today"
            : "day__number"
        }
      >
        {moment()
          .day(day)
          .format("D")}
      </span>
    </div>
  ));
};
export default Day;
