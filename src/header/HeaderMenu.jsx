import React from "react";
import './headerMenuStyle.scss';
import { nextMonth } from '../main/functionFilter.js'
import moment from "moment";

const HeaderMenu = props => {

  return (
    <div className="header-menu">
      <button
        className="header-menu__create"
        onClick={props.openClearPopap}
      >
        <img src="https://img.icons8.com/plasticine/100/000000/plus-math.png"></img>
        Create
      </button>
      <button
        className="header-menu__today"
        onClick={props.toDay}
      >
        Today
      </button>
      <div className="header-menu-change">
        <button
          className="header-menu-change__left"
          onClick={props.lastWeek}
        >
          <img src="https://img.icons8.com/material-sharp/24/000000/forward.png"></img>
        </button>
        <button
          className="header-menu-change__right"
          onClick={props.nextWeek}
        >
          <img src="https://img.icons8.com/material-sharp/24/000000/forward.png"></img>
        </button>
      </div>
      <div className="header-menu-months">
        <span className="header-menu-months__nowMonth">
          {moment().day(props.ArrayOFWeek[0]).format("MMMM")}
        </span>
        <span className="header-menu-months__nextMonth">
            {nextMonth (props.ArrayOFWeek)}
        </span>
        <span className="header-menu-months__year">
          {props.sunday.format("YYYY")}
        </span>
      </div>
    </div>
  );
};

export default HeaderMenu;
