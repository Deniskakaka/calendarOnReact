import React from 'react';
import Day from './Day.jsx';

const Week = (props) => {
    return (
        <Day 
            ArrayOFWeek={props.ArrayOFWeek} 
            openPopap={props.openPopap} 
            changeTime={props.changeTime} 
            tasks={props.tasks}  
            openPopapWithDelete={props.openPopapWithDelete}
            showData={props.showData}
            showHours={props.showHours} 
        />
    );
};

export default Week;