export const filterTasks = (date, array) => {
   let mass = array.filter(i => i.timeStart === date);
   return mass;
};

export const top = (time) => {
   const hours = +time.slice(0, 2) * 61;
   const minuts = +time.slice(3)
   return hours + minuts;
}

export const height = (timeStart,timeEnd) => {
    const hours = Math.abs(+timeStart.slice(0, 2) - timeEnd.slice(0, 2)) * 61;
    const minuts = Math.abs(+timeStart.slice(3) - timeEnd.slice(3))
    return hours + minuts;
}

export const getRandomIntInclusive = (min, max) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; 
 }