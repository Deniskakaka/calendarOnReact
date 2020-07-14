import React from "react";
import Week from "./Week.jsx";
import Popap from "../popap/Popap.jsx";
import SaidBar from "./SaidBar.jsx";
import Form from "../popap/Form.jsx"
import './main.scss';

function Main({ ...props }) {

  return (
    <main>
      <SaidBar />
      <Week
        ArrayOfWeek={props.ArrayOfWeek}
        openPopap={props.openPopap}
        tasks={props.tasks}
        showData={props.showData}
        showHours={props.showHours}
      />
      {props.open &&  <Form
        open={props.open}
        closePopap={props.closePopap}
        creacteTask={props.creacteTask}
        delete={props.delete}
        deleteTask={props.deleteTask}
        tasks={props.tasks}
        start={props.start}
        end={props.end}
        timeStart={props.timeStart}
        timeEnd={props.timeEnd}
        id={props.id}
      ></Form>}
    </main>
  );
}

export default Main;