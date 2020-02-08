import React from "react";
import "./HeaderMenuStyle.scss";

const HeaderMenu = props => {
  const nextMonth =
    +props.monday.format("D") > +props.saturday.format("D");
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
          {props.monday.format("MMMM")}
        </span>
        {nextMonth ? (
          <div>
            <span className="header-menu-months__line">
              -
            </span>
            <span className="header-menu-months__nextMonth">
              {props.saturday.format("MMMM")}
            </span>
          </div>
        ) : (
          ""
        )}
        <span className="header-menu-months__year">
          {props.monday.format("YYYY")}
        </span>
      </div>
    </div>
  );
};

export default HeaderMenu;
