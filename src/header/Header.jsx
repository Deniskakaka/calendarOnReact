import React from "react";
import HeaderMenu from "./HeaderMenu.jsx";
import HeaderWeek from "./HeaderWeek.jsx";
import './header.scss';

const Header = (props) => {
  return (
    <header>
      <HeaderMenu
        openClearPopap={props.openClearPopap}
        nextWeek={props.nextWeek}
        lastWeek={props.lastWeek}
        getThisDay={props.getThisDay}
        ArrayOFWeek={props.ArrayOFWeek}
      />
      <HeaderWeek ArrayOFWeek={props.ArrayOFWeek}/>
    </header>
  );
};

export default Header;
