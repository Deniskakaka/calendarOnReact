import React from "react";
import Week from "./Week.jsx";
import Popap from "../popap/Popap.jsx";
import "./main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Week
          ArrayOFWeek={this.props.ArrayOFWeek}
          openPopap={this.props.openPopap}
          tasks={this.props.tasks}
          showData={this.props.showData}
        />
        {this.props.open && <Popap
          open={this.props.open}
          closePopap={this.props.closePopap}
          creacteTask={this.props.creacteTask}
          delete={this.props.delete}
          deleteTask={this.props.deleteTask}
          tasks={this.props.tasks}
          start={this.props.start}
          end={this.props.end}
          timeStart={this.props.timeStart}
          timeEnd={this.props.timeEnd}
          id={this.props.id}
        />}
      </main>
    );
  }
}

export default Main;

//start
//end
//timeStart
//timeEnd
//text
//title
