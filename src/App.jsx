import React from "react";
import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import moment from "moment";
import {
  createTask,
  fetchTasksList,
  deleteTask
} from "./tasksFunctions.js";
import {
  pastDay,
  sameTime,
  littleTime,
  sixHours,
  toDay
} from "./main/functionFilter.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.creacteTask = this.creacteTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.showData = this.showData.bind(this);
    this.showHours = this.showHours.bind(this);
  }

  state = {
    ArrayOfWeek: [1, 2, 3, 4, 5, 6, 7],
    sunday: moment().isoWeekday(1),
    saturday:moment().isoWeekday(6),
    open: false,
    delete: false,
    tasks: [],
    start: "",
    end: "",
    timeStart: "",
    timeEnd: "",
    id: ""
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList,
        open: false
      })
    );
  };

  nextWeek = () => {
    this.setState({
      ArrayOfWeek: this.state.ArrayOfWeek.map(
        day => day + 7
      ),
      sunday: this.state.sunday.add(7, "days"),
      saturday: this.state.saturday.add(7, "days")
    });
  };

  lastWeek = () => {
    this.setState({
      ArrayOfWeek: this.state.ArrayOfWeek.map(
        day => day - 7
      ),
      sunday: this.state.sunday.add(-7, "days"),
      saturday: this.state.saturday.add(-7, "days")
    });
  };

  toDay = () => {
    this.setState({
      ArrayOfWeek: [1, 2, 3, 4, 5, 6, 7],
      sunday: moment().isoWeekday(1),
      saturday:moment().isoWeekday(6),
    });
  };

  openPopap = () => {
    this.setState({
      open: true
    });
  };

  openClearPopap = () => {
    this.setState({
      open: true,
      start: "",
      end: "",
      timeStart: "",
      timeEnd: ""
    });
  };

  closePopap = () => {
    this.setState({
      open: false
    });
  };

  creacteTask(object, tasks) {
    let CorectTime = object.start < object.end;
    if (object.timeStart === "" || object.timeEnd === "") {
      alert("Please write date");
      return null;
    }
    if (sameTime(tasks, object).length > 0) {
      alert("time does not have to cross");
      return null;
    }
    if (!CorectTime) {
      alert("Write corect time or max date 23:45");
      return null;
    }
    if (pastDay(object)) {
      alert("Your time is over :)");
      return null;
    }
    if (littleTime(object)) {
      alert("task won't be less one hour");
      return null;
    }
    if (sixHours(object)) {
      alert("the task cannot be more than six hours");
      return null;
    }
    if (toDay(object)) {
      alert("task can not more than one day");
      return null;
    }
    createTask(object).then(result => {
      this.fetchTasks();
    });
    this.setState({
      open: false,
      delete: true
    });
  }

  deleteTask(id, timeEnd, end) {
    if (
      timeEnd === moment().format("YYYY-MM-DD") &&
      +end.slice(0, 2) === +moment().format("HH") &&
      Math.abs(+end.slice(3) - moment().format("mm")) < 15 &&
      end.slice(3) > moment().format("mm")
    ) {
      alert(
        "the task cannot be deleted for fifteen minutes to the end"
      );
      return null;
    }
    deleteTask(id).then(result => {
      this.fetchTasks();
    });
  }

  showData(start, end, timeStart, timeEnd, id) {
    this.setState({
      start: start,
      end: end,
      timeStart: timeStart,
      timeEnd: timeEnd,
      id: id,
      delete: true
    });
  }

  showHours(start, end, timeStart, timeEnd) {
    this.setState({
      start: start,
      end: end,
      timeStart: timeStart,
      timeEnd: timeEnd,
      delete: false
    });
  }

  render() {
    return (
      <>
        <Header
          openClearPopap={this.openClearPopap}
          sunday={this.state.sunday}
          saturday={this.state.saturday}
          ArrayOFWeek={this.state.ArrayOfWeek}
          nextWeek={this.nextWeek}
          lastWeek={this.lastWeek}
          toDay={this.toDay}
        />
        <Main
          ArrayOfWeek={this.state.ArrayOfWeek}
          openPopap={this.openPopap}
          closePopap={this.closePopap}
          open={this.state.open}
          creacteTask={this.creacteTask}
          tasks={this.state.tasks}
          delete={this.state.delete}
          deleteTask={this.deleteTask}
          showData={this.showData}
          start={this.state.start}
          end={this.state.end}
          timeStart={this.state.timeStart}
          timeEnd={this.state.timeEnd}
          id={this.state.id}
          showHours={this.showHours}
        />
      </>
    );
  }
}

export default App;
