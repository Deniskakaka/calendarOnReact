import moment from "moment";

export const filterTasks = (date, array) => {
  let mass = array.filter(i => i.timeStart === date);
  return mass;
};

export const top = time => {
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

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const sameTime = (tasks, object) => {
  let sameTime = [];
  for (let i = 0; i < tasks.length; i++) {
    if (
      tasks[i].timeStart.slice(5, 7) ===
        object.timeStart.slice(5, 7) &&
      tasks[i].timeStart.slice(8) ===
        object.timeStart.slice(8) &&
      +tasks[i].start.slice(0, 2) ===
        +object.start.slice(0, 2) &&
      +tasks[i].start.slice(3) === +object.start.slice(3)
    ) {
      sameTime.push(object);
    }
    if (
      tasks[i].timeStart.slice(5, 7) ===
        object.timeStart.slice(5, 7) &&
      tasks[i].timeStart.slice(8) ===
        object.timeStart.slice(8) &&
      +tasks[i].start.slice(0, 2) <
        +object.start.slice(0, 2) &&
      +tasks[i].end.slice(0, 2) > +object.start.slice(0, 2)
    ) {
      sameTime.push(object);
    }
    if (
      tasks[i].timeStart.slice(5, 7) ===
        object.timeStart.slice(5, 7) &&
      tasks[i].timeStart.slice(8) ===
        object.timeStart.slice(8) &&
      +tasks[i].start.slice(0, 2) ===
        +object.start.slice(0, 2) &&
      +tasks[i].start.slice(3) < object.start.slice(3)
    ) {
      sameTime.push(object);
    }
  }
  return sameTime;
};

export const overDay = object => {
  return (object.start.slice(0, 2) === 23 &&
    object.end.slice(0, 2) > 0) ||
    object.timeStart < object.timeEnd
    ? true
    : false;
};

export const pastDay = object => {
  return object.timeStart < moment().format("YYYY-MM-DD") ||
    object.timeEnd < moment().format("YYYY-MM-DD")
    ? true
    : false;
};
