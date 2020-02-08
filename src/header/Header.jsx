import React from "react";
import HeaderMenu from "./HeaderMenu.jsx";
import HeaderWeek from "./HeaderWeek.jsx";
import "./header.scss";

const Header = (props) => {
  return (
    <header>
      <HeaderMenu
        openClearPopap={props.openClearPopap}
        nextWeek={props.nextWeek}
        lastWeek={props.lastWeek}
        monday={props.monday}
        saturday={props.saturday}
        toDay={props.toDay}
      />
      <HeaderWeek ArrayOFWeek={props.ArrayOFWeek} />
    </header>
  );
};

export default Header;
