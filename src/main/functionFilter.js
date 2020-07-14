import moment from "moment";

export function nextMonth(week) {
  if(+moment().day(week[6]).format("DD") < +moment().day(week[0]).format("DD")) {
    return moment().day(week[6]).format("MMMM")
  } else {
    return null;
  }
}

export const filterTasks = (date, array) => {
  return array.filter((i) => i.timeStart === date);
};

export const top = (time) => {
  const hours = +time.slice(0, 2) * 61;
  const minuts = +time.slice(3);
  return hours + minuts;
};

export const height = (timeStart, timeEnd) => {
  const hours =
    +timeStart.slice(0, 2) === 23 &&
    +timeEnd.slice(0, 2) === 0
      ? 61
      : Math.abs(
          +timeStart.slice(0, 2) - +timeEnd.slice(0, 2)
        ) * 61;
  const minuts =
    +timeStart.slice(0, 2) === 23 &&
    +timeEnd.slice(0, 2) === 0
      ? 0
      : Math.abs(+timeStart.slice(3) - timeEnd.slice(3));
  return hours + minuts;
};

export const sameTime = (tasks, obj) => {
  for (let i = 0; i < tasks.length; i++) {
    if (
      obj.timeStart === tasks[i].timeStart &&
      obj.timeEnd === tasks[i].timeEnd
    ) {
      if (
        obj.start === tasks[i].start ||
        obj.end === tasks[i].end ||
        (obj.start < tasks[i].start &&
          obj.end > tasks[i].end) ||
        (obj.start > tasks[i].start &&
          obj.start < tasks[i].end)
      ) {
        return true;
      }
    }
  }
  return false;
};

export const pastDay = (string) => {
  return string < moment().format("YYYY-MM-DD")
    ? true
    : false;
};

export const littleTime = (object) => {
  if (object.start !== "" && object.end !== "") {
      +object.start.slice(0, 2) === +object.end.slice(0, 2) &&
      +object.start.slice(3) - +object.end.slice(3) < 60;
  }
};

export const sixHours = (object) => {
  return (
    +object.end.slice(0, 2) - +object.start.slice(0, 2) > 6
  );
};

export const toDay = (object) => {
  if (
    (object.timeStart !== "" &&
      object.timeEnd !== "" &&
      object.timeEnd < object.timeStart) ||
    object.start > object.end
  ) {
    return true;
  }
};
